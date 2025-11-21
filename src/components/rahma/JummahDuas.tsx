'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { jummahDuas, surahAlKahfVirtues } from '@/lib/islamic';
import { BookHeart, BookOpen } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import Link from 'next/link';

export function JummahDuas() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-xl font-headline">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Surah Al-Kahf
            </div>
            <Link
              href="https://pdf.tv/wp-content/uploads/2021/04/Surah-Al-Kahf-Pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <BookOpen className="mr-2 h-4 w-4" />
                Read Surah Al-Kahf
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>
            The Messenger of Allah (ﷺ) said: "Whoever reads Surah Al-Kahf on the
            day of Jummah, will have a light that will shine from him from one
            Friday to the next."
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {surahAlKahfVirtues.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border bg-secondary/30 p-4"
              >
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="italic text-muted-foreground">
                  &ldquo;{item.description}&rdquo;
                </p>
                <p className="mt-2 text-right text-xs text-muted-foreground">
                  - {item.reference}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
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
    </div>
  );
}
