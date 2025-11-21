'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Bell,
  MapPin,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  Loader2,
  Volume2,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { generateAzan } from '@/ai/flows/azan-flow';

const prayerIcons: { [key: string]: React.ReactNode } = {
  Fajr: <Sunrise className="h-5 w-5 text-accent" />,
  Dhuhr: <Sun className="h-5 w-5 text-accent" />,
  Asr: <Sun className="h-5 w-5 text-accent opacity-70" />,
  Maghrib: <Sunset className="h-5 w-5 text-accent" />,
  Isha: <Moon className="h-5 w-5 text-accent" />,
};

type PrayerTimesData = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

type NextPrayerInfo = {
  name: string;
  time: string;
  remaining: string;
};

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [nextPrayer, setNextPrayer] = useState<NextPrayerInfo | null>(null);
  const [location, setLocation] = useState<{
    city: string;
    country: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [playingAzan, setPlayingAzan] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAzan = async (prayerName: string) => {
    if (playingAzan === prayerName) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingAzan(null);
      return;
    }

    setPlayingAzan(prayerName);
    try {
      const { audioDataUri } = await generateAzan({ prayerName });
      if (audioRef.current) {
        audioRef.current.src = audioDataUri;
        audioRef.current.play();
        audioRef.current.onended = () => {
          setPlayingAzan(null);
        };
      }
    } catch (e) {
      console.error('Failed to play Azan', e);
      setError('Could not generate Azan audio.');
      setPlayingAzan(null);
    }
  };

  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const fetchPrayerTimes = (city: string, country: string) => {
      const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            const timings = data.data.timings;
            const relevantTimings: PrayerTimesData = {
              Fajr: timings.Fajr,
              Dhuhr: timings.Dhuhr,
              Asr: timings.Asr,
              Maghrib: timings.Maghrib,
              Isha: timings.Isha,
            };
            setPrayerTimes(relevantTimings);
            setLocation({ city, country });
          } else {
            setError('Could not fetch prayer times for your location. Please try again later.');
          }
        })
        .catch(() => {
          setError('Failed to connect to the prayer times service.');
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const fetchLocationAndPrayerTimes = (latitude: number, longitude: number) => {
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
                if (data.city && data.countryName) {
                    fetchPrayerTimes(data.city, data.countryName);
                } else {
                    setError('Could not determine city and country. Using default (Mecca).');
                    fetchPrayerTimes('Mecca', 'Saudi Arabia');
                }
            })
            .catch(() => {
                setError('Failed to fetch location data. Using default (Mecca).');
                fetchPrayerTimes('Mecca', 'Saudi Arabia');
            });
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchLocationAndPrayerTimes(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        () => {
          setError('Location access denied. Using default location (Mecca).');
          fetchPrayerTimes('Mecca', 'Saudi Arabia');
        }
      );
    } else {
      setError('Geolocation is not supported. Using default location (Mecca).');
      fetchPrayerTimes('Mecca', 'Saudi Arabia');
    }
  }, []);

  useEffect(() => {
    if (!prayerTimes) return;

    const interval = setInterval(() => {
      const now = new Date();
      const prayerTimesList = Object.entries(prayerTimes)
        .filter(([name]) => prayerIcons[name])
        .map(([name, time]) => {
          const [hour, minute] = time.split(':').map(Number);
          const prayerDate = new Date();
          prayerDate.setHours(hour, minute, 0, 0);
          return { name, time: prayerDate };
        });

      let nextPrayerInfo: { name: string; time: Date } | null = null;
      for (const prayer of prayerTimesList) {
        if (prayer.time > now) {
          nextPrayerInfo = prayer;
          break;
        }
      }

      if (!nextPrayerInfo) {
        const fajrTime = prayerTimesList.find((p) => p.name === 'Fajr');
        if (fajrTime) {
          const tomorrowFajr = new Date(fajrTime.time);
          tomorrowFajr.setDate(tomorrowFajr.getDate() + 1);
          nextPrayerInfo = { name: 'Fajr', time: tomorrowFajr };
        }
      }

      if (nextPrayerInfo) {
        const diff = nextPrayerInfo.time.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setNextPrayer({
          name: nextPrayerInfo.name,
          time: nextPrayerInfo.time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
          }),
          remaining: `${String(hours).padStart(2, '0')}:${String(
            minutes
          ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [prayerTimes]);

  const prayerTimesList = prayerTimes
    ? Object.entries(prayerTimes).filter(([name]) => prayerIcons[name])
    : [];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Bell className="h-6 w-6 text-primary" />
          Prayer Times
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>
            {location
              ? `${location.city}, ${location.country}`
              : 'Loading location...'}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex h-64 items-center justify-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Fetching prayer times for your location...</span>
          </div>
        ) : error ? (
          <div className="text-center text-destructive">{error}</div>
        ) : (
          <div className="space-y-4">
            {nextPrayer && (
              <div className="mb-6 rounded-lg border-2 border-primary bg-primary/10 p-4 text-center">
                <p className="text-lg font-semibold text-primary">
                  Next Prayer: {nextPrayer.name}
                </p>
                <p className="text-2xl font-bold font-mono text-primary">
                  {nextPrayer.time}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Time Remaining:
                </p>
                <p className="text-xl font-mono font-semibold text-primary">
                  {nextPrayer.remaining}
                </p>
              </div>
            )}
            {prayerTimesList.map(([name, time]) => (
              <div
                key={name}
                className={`flex items-center justify-between rounded-lg p-3 transition-colors ${
                  nextPrayer?.name === name
                    ? 'bg-primary/20'
                    : 'bg-background hover:bg-secondary/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  {prayerIcons[name]}
                  <span className="w-20 font-semibold">{name}</span>
                  <span className="font-mono text-lg text-foreground">
                    {new Date(`1970-01-01T${time}`).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => playAzan(name)}
                    disabled={playingAzan === name}
                    className="p-2 text-muted-foreground hover:text-primary disabled:cursor-wait disabled:text-primary"
                    aria-label={`Play Azan for ${name}`}
                  >
                    {playingAzan === name ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                  <Label htmlFor={`notif-${name}`} className="sr-only">
                    Enable notification for {name}
                  </Label>
                  <Switch id={`notif-${name}`} />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
