'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArabicQaidaIcon } from './ArabicQaidaIcon';

const arabicAlphabet = [
  { letter: 'ا', name: 'Alif' },
  { letter: 'ب', name: 'Ba' },
  { letter: 'ت', name: 'Ta' },
  { letter: 'ث', name: 'Tha' },
  { letter: 'ج', name: 'Jim' },
  { letter: 'ح', name: 'Ha' },
  { letter: 'خ', name: 'Kha' },
  { letter: 'د', name: 'Dal' },
  { letter: 'ذ', name: 'Dhal' },
  { letter: 'ر', name: 'Ra' },
  { letter: 'ز', name: 'Zay' },
  { letter: 'س', name: 'Sin' },
  { letter: 'ش', name: 'Shin' },
  { letter: 'ص', name: 'Sad' },
  { letter: 'ض', name: 'Dad' },
  { letter: 'ط', name: 'Ta' },
  { letter: 'ظ', name: 'Dha' },
  { letter: "'ع", name: "'Ayn" },
  { letter: 'غ', name: 'Ghayn' },
  { letter: 'ف', name: 'Fa' },
  { letter: 'ق', name: 'Qaf' },
  { letter: 'ك', name: 'Kaf' },
  { letter: 'ل', name: 'Lam' },
  { letter: 'م', name: 'Mim' },
  { letter: 'ن', name: 'Nun' },
  { letter: 'ه', name: 'Ha' },
  { letter: 'و', name: 'Waw' },
  { letter: 'ي', name: 'Ya' },
  { letter: 'ﻻ', name: 'Lam Alif' },
  { letter: 'ء', name: 'Hamza' },
];

export function ArabicQaida() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <ArabicQaidaIcon className="h-6 w-6" />
          Arabic Qaida - The Alphabet
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {arabicAlphabet.map((char) => (
            <div
              key={char.name}
              className="group flex flex-col items-center justify-center gap-2 rounded-lg border bg-background/50 p-4 transition-all hover:bg-secondary/50 hover:shadow-md"
            >
              <p
                className="font-headline text-6xl text-primary"
                dir="rtl"
              >
                {char.letter}
              </p>
              <p className="font-semibold text-foreground">{char.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
