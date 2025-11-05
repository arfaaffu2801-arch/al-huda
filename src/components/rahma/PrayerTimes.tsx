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
import { prayerTimesData } from '@/lib/islamic';
import { Bell, MapPin, Moon, Sun, Sunrise, Sunset } from 'lucide-react';

const prayerIcons: { [key: string]: React.ReactNode } = {
  Fajr: <Sunrise className="h-5 w-5 text-accent" />,
  Zohar: <Sun className="h-5 w-5 text-accent" />,
  Asr: <Sun className="h-5 w-5 text-accent opacity-70" />,
  Maghrib: <Sunset className="h-5 w-5 text-accent" />,
  Isha: <Moon className="h-5 w-5 text-accent" />,
};

export function PrayerTimes() {
  const prayerTimes = Object.entries(prayerTimesData).filter(
    ([name]) => name !== 'Sunrise'
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Bell className="h-6 w-6 text-primary" />
          Prayer Times
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Location: Makkah, Saudi Arabia (Default)</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {prayerTimes.map(([name, time]) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-lg bg-background p-3 transition-colors hover:bg-secondary/50"
            >
              <div className="flex items-center gap-4">
                {prayerIcons[name]}
                <span className="w-20 font-semibold">{name}</span>
                <span className="font-mono text-lg text-foreground">
                  {time}
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
      </CardContent>
    </Card>
  );
}
