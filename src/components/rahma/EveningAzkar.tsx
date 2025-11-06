'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { eveningAzkar } from '@/lib/islamic';
import { Moon } from 'lucide-react';

export function EveningAzkar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Moon className="h-6 w-6 text-primary" />
          Evening Azkar
        </CardTitle>
        <CardDescription>Remembrances for the evening.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {eveningAzkar.map((azkar, index) => (
          <div
            key={index}
            className="rounded-lg border bg-secondary/30 p-4"
          >
            <p className="mb-2 text-lg text-primary" dir="rtl">
              {azkar.arabic}
            </p>
            <p className="mb-2 text-sm text-muted-foreground">
              {azkar.transliteration}
            </p>
            <p className="italic text-foreground">&ldquo;{azkar.translation}&rdquo;</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
