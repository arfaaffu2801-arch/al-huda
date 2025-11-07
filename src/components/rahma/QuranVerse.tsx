import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { verseOfTheDay } from '@/lib/islamic';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function QuranVerse() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookOpen className="h-6 w-6 text-primary" />
          Start of the day
        </CardTitle>
        <Link
          href="/quran"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Read more <ArrowRight className="h-4 w-4" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p
          className="font-headline text-3xl leading-relaxed text-primary"
          dir="rtl"
        >
          {verseOfTheDay.arabic}
        </p>
        <p className="text-muted-foreground">{verseOfTheDay.transliteration}</p>
        <Separator />
        <p className="text-lg italic text-foreground">
          &ldquo;{verseOfTheDay.translation}&rdquo;
        </p>
      </CardContent>
      <CardFooter>
        <p className="w-full text-right text-sm text-muted-foreground">
          {verseOfTheDay.reference}
        </p>
      </CardFooter>
    </Card>
  );
}
