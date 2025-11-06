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

export function IslamicCalendar() {
  const [hijriDate, setHijriDate] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());

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
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}
