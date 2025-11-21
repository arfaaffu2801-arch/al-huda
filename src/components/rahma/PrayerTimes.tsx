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
  PlayCircle,
  Volume2,
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { generateAzan } from '@/ai/flows/azan-flow';

const prayerIcons: { [key: string]: React.ReactNode } = {
  Fajr: <Sunrise className="h-5 w-5 text-accent" />,
  Sunrise: <Sunrise className="h-5 w-5 text-yellow-500" />,
  Dhuhr: <Sun className="h-5 w-5 text-accent" />,
  Asr: <Sun className="h-5 w-5 text-accent opacity-70" />,
  Maghrib: <Sunset className="h-5 w-5 text-accent" />,
  Isha: <Moon className="h-5 w-5 text-accent" />,
};

type PrayerTimesData = {
  Fajr: string;
  Sunrise: string;
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
    const fetchPrayerTimes = (latitude: number, longitude: number) => {
      const date = new Date();
      const url = `https://api.aladhan.com/v1/timings/${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}?latitude=${latitude}&longitude=${longitude}&method=2`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            const timings = data.data.timings;
            const relevantTimings: PrayerTimesData = {
              Fajr: timings.Fajr,
              Sunrise: timings.Sunrise,
              Dhuhr: timings.Dhuhr,
              Asr: timings.Asr,
              Maghrib: timings.Maghrib,
              Isha: timings.Isha,
            };
            setPrayerTimes(relevantTimings);
            setLocation({
              city: data.data.meta.timezone.split('/')[1].replace('_', ' '),
              country: data.data.meta.timezone.split('/')[0],
            });
          } else {
            setError('Could not fetch prayer times. Please try again later.');
          }
        })
        .catch(() => {
          setError('Failed to connect to the prayer times service.');
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchPrayerTimes(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        () => {
          setError('Location access denied. Using default location (Mecca).');
          setLoading(false);
          fetchPrayerTimes(21.4225, 39.8262);
        }
      );
    } else {
      setError('Geolocation is not supported. Using default location (Mecca).');
      setLoading(false);
      fetchPrayerTimes(21.4225, 39.8262);
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
