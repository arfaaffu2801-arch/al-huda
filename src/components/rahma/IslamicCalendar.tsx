'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { CalendarDays } from 'lucide-react';
import { useEffect, useState } from 'react';
import { islamicFestivals2025 } from '@/lib/islamic';
import { Badge } from '../ui/badge';

type Festival = {
  name: string;
  date: Date;
  hijri: string;
};

export function IslamicCalendar() {
  const [hijriDate, setHijriDate] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(
    null
  );

  useEffect(() => {
    const today = date || new Date();
    const hijriDateString = new Intl.DateTimeFormat('en-US-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(today);
    setHijriDate(hijriDateString);

    const festival = islamicFestivals2025.find(
      (f) =>
        f.date.getDate() === today.getDate() &&
        f.date.getMonth() === today.getMonth() &&
        f.date.getFullYear() === today.getFullYear()
    );
    setSelectedFestival(festival || null);
  }, [date]);

  const festivalDates = islamicFestivals2025.map((f) => f.date);

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
      <CardContent className="flex flex-col items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            festival: festivalDates,
          }}
          modifiersClassNames={{
            festival: 'bg-primary/20 text-primary-foreground rounded-full',
          }}
        />
        <div className="mt-4 w-full text-center">
          {selectedFestival ? (
            <Badge variant="secondary" className="h-auto text-base font-semibold">
              <div className="flex flex-col p-2">
                <span>{selectedFestival.name}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {selectedFestival.hijri}
                </span>
              </div>
            </Badge>
          ) : (
            <p className="text-sm text-muted-foreground">
              Select a date to see events.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
