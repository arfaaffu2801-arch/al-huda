'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

const makhrajPoints = [
  {
    name: 'The Throat (Al-Halq)',
    letters: 'ء ه / ع ح / غ خ',
    description:
      'This area is divided into three parts: the deepest, middle, and highest part of the throat.',
  },
  {
    name: 'The Tongue (Al-Lisan)',
    letters: 'ق ك / ج ش ي / ض / ل / ن / ر / ت د ط / س ص ز / ث ذ ظ',
    description:
      'The largest area, with 10 articulation points for 18 different letters.',
  },
  {
    name: 'The Lips (Ash-Shafatan)',
    letters: 'ف / ب م و',
    description: 'These two points of articulation produce four letters.',
  },
  {
    name: 'The Nasal Cavity (Al-Khayshum)',
    letters: 'م ن (ghunnah)',
    description: 'This is the source of the ghunnah (nasalization).',
  },
  {
    name: 'The Oral Cavity (Al-Jawf)',
    letters: 'ا و ي (madd)',
    description:
      'The empty space in the throat and mouth, for the madd (long vowel) letters.',
  },
];

export function Makhraj() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <MessageCircle className="h-6 w-6 text-primary" />
          Makhraj (Articulatory Points)
        </CardTitle>
        <CardDescription>
          Learn the correct pronunciation of Arabic letters by understanding
          their points of articulation.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="relative flex items-center justify-center rounded-lg bg-secondary/30 p-4">
          <Image
            src="https://picsum.photos/seed/makhraj/600/400"
            alt="Makhraj Diagram"
            width={600}
            height={400}
            className="rounded-md object-cover"
            data-ai-hint="articulation diagram"
          />
        </div>
        <div className="space-y-4">
          {makhrajPoints.map((point) => (
            <div key={point.name} className="rounded-lg border p-4">
              <h3 className="font-semibold">{point.name}</h3>
              <p className="mb-2 text-2xl font-headline text-primary" dir="rtl">
                {point.letters}
              </p>
              <p className="text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
