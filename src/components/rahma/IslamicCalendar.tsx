
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { CalendarDays, Star } from 'lucide-react';
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
      <CardContent className="flex flex-col items-center justify-center gap-6">
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
        <div className="w-full text-center">
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
        <div className="w-full max-w-md rounded-lg border p-4">
            <h3 className="mb-4 text-center text-lg font-semibold">Upcoming Festivals 2025</h3>
            <ul className="space-y-2">
                {islamicFestivals2025.map((festival, index) => (
                    <li key={index} className="flex justify-between items-center text-sm p-2 rounded-md hover:bg-secondary/50">
                        <div className="flex items-center gap-2">
                           <Star className="h-4 w-4 text-accent" />
                           <span>{festival.name}</span>
                        </div>
                        <div className="text-right">
                            <p className='font-semibold'>{festival.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                            <p className="text-xs text-muted-foreground">{festival.hijri}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </CardContent>
    </Card>
  );
}
