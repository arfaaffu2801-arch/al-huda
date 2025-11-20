'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { jummahDuas } from '@/lib/islamic';
import { BookHeart } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

export function JummahDuas() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookHeart className="h-6 w-6 text-primary" />
          Jummah Du'as
        </CardTitle>
        <CardDescription>
          Supplications for the day of Jummah.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full">
          <div className="space-y-4 p-1">
            {jummahDuas.map((dua, index) => (
              <div
                key={index}
                className="rounded-lg border bg-secondary/30 p-4"
              >
                <p className="mb-2 text-lg text-primary" dir="rtl">
                  {dua.arabic}
                </p>
                <p className="mb-2 text-sm text-muted-foreground">
                  {dua.transliteration}
                </p>
                <p className="italic text-foreground">
                  &ldquo;{dua.translation}&rdquo;
                </p>
                {dua.reference && (
                  <p className="mt-2 text-right text-xs text-muted-foreground">
                    - {dua.reference}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
