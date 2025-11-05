'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { islamicEvents } from '@/lib/islamic';
import { CalendarDays, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export function IslamicCalendar() {
  const [hijriDate, setHijriDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const hijriDateString = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(today);
    setHijriDate(hijriDateString);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <CalendarDays className="h-6 w-6 text-primary" />
          Islamic Calendar
        </CardTitle>
        <CardDescription>
          {hijriDate || 'Loading Hijri date...'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="mb-4 font-semibold">Important Dates</h3>
        <div className="space-y-3">
          {islamicEvents.map((event) => (
            <div key={event.name} className="flex items-start gap-3">
              <div className="mt-1">
                <Star className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="font-medium">{event.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
