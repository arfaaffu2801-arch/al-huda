'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { morningAzkar } from '@/lib/islamic';
import { Sun } from 'lucide-react';

export function MorningAzkar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Sun className="h-6 w-6 text-primary" />
          Morning Azkar
        </CardTitle>
        <CardDescription>Remembrances for the morning.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {morningAzkar.map((azkar, index) => (
          <div
            key={index}
            className="rounded-lg border bg-secondary/30 p-4"
          >
            <p className="mb-2 text-lg text-primary" dir="rtl">
              {azkar.arabic}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
