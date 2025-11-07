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
import { Bell, MapPin, Moon, Sun, Sunrise, Sunset, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [location, setLocation] = useState<{
    city: string;
    country: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
            // The API returns Dhuhr, but the old UI used Zohar. Let's stick to the API.
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
          setError('Location access denied. Please enable location services to see prayer times.');
          setLoading(false);
          // Fallback to a default location (Mecca) if permission is denied
          fetchPrayerTimes(21.4225, 39.8262); 
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
       // Fallback to a default location (Mecca)
      fetchPrayerTimes(21.4225, 39.8262);
    }
  }, []);

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
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {prayerTimesList.map(([name, time]) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-lg bg-background p-3 transition-colors hover:bg-secondary/50"
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
                    <Label htmlFor={`notif-${name}`} className="sr-only">
                      Enable notification for {name}
                    </Label>
                    <Switch id={`notif-${name}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden items-center justify-center md:flex">
              <Image
                src="https://picsum.photos/seed/man-praying/300/400"
                alt="Man praying"
                width={300}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint="man praying"
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
