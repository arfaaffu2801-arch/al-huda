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
import { useLanguage } from '@/context/LanguageContext';

export function JummahDuas() {
  const { language } = useLanguage();
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <BookHeart className="h-6 w-6 text-primary" />
            {language === 'kn' ? 'ಜುಮ್ಮಾ ದುವಾಗಳು' : "Jummah Du'as"}
          </CardTitle>
          <CardDescription>
            {language === 'kn'
              ? 'ಜುಮ್ಮಾ ದಿನದಂದು ಪಠಿಸಬೇಕಾದ ಪ್ರಾರ್ಥನೆಗಳು.'
              : 'Supplications for the day of Jummah.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full">
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
    </div>
  );
}
