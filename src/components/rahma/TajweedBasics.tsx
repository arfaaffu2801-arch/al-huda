'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BookText } from 'lucide-react';
import Image from 'next/image';

const tajweedRules = [
  {
    name: 'Noon Sakinah & Tanween',
    description: 'The rules for a non-voweled "n" and the nunation.',
  },
  {
    name: 'Meem Sakinah',
    description: 'The rules for a non-voweled "m".',
  },
  {
    name: 'Qalqalah',
    description: 'The bouncing or echoing of certain letters when they are Sakin.',
  },
  {
    name: 'Madd',
    description: 'The elongation of vowel sounds.',
  },
];

export function TajweedBasics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookText className="h-6 w-6 text-primary" />
          Basics of Tajweed
        </CardTitle>
        <CardDescription>
          Learn the fundamental rules of Tajweed for proper Qur'an recitation.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="relative flex items-center justify-center rounded-lg bg-secondary/30 p-4">
          <Image
            src="https://picsum.photos/seed/tajweed/600/400"
            alt="Tajweed"
            width={600}
            height={400}
            className="rounded-md object-cover"
            data-ai-hint="quran book"
          />
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Tajweed means "to master" or "to do something well". It is the set
            of rules governing how the words of the Qur'an should be pronounced
            during its recitation. Here are some of the basic concepts:
          </p>
          <div className="space-y-3">
            {tajweedRules.map((rule) => (
              <div key={rule.name} className="rounded-lg border p-3">
                <h3 className="font-semibold">{rule.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
