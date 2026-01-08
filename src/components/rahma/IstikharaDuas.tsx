'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { istikharahDuas } from '@/lib/islamic';
import { Shuffle } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useLanguage } from '@/context/LanguageContext';

export function IstikharaDuas() {
  const { language } = useLanguage();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Shuffle className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ಸಲಾತ್ ಅಲ್-ಇಸ್ತಿಖಾರಾ' : 'Salat al-Istikhara'}
        </CardTitle>
        <CardDescription>
          {language === 'kn'
            ? 'ನಿರ್ಧಾರದಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ಕೋರುವ ಪ್ರಾರ್ಥನೆ.'
            : 'The prayer for seeking guidance in a decision.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full">
          <div className="space-y-4 p-1">
            {istikharahDuas.map((dua, index) => (
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
                  &ldquo;{language === 'kn' ? (dua as any).kannada_translation || dua.translation : dua.translation}&rdquo;
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
