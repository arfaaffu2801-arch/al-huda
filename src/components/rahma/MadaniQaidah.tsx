'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function MadaniQaidah() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Book className="h-6 w-6 text-primary" />
          Qaidah
        </CardTitle>
        <CardDescription>
          Learn to read the Holy Qur'an with correct pronunciation using the
          Madani Qaidah.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="relative flex items-center justify-center rounded-lg bg-secondary/30 p-4">
          <Book className="h-48 w-48 text-primary/30" />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-muted-foreground">
            The Madani Qaidah is a foundational book that teaches the Arabic
            alphabet and basic Tajweed rules through its 21 lessons. It's an
            essential starting point for beginners of all ages.
          </p>
          <Link
            href="https://media.dawateislami.net/Book-Library/en/Madani-Qaidah/Madani-Qaidah-Eng-v1-Web.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open it
            </Button>
          </Link>
          <p className="text-xs text-center text-muted-foreground">
            You will be redirected to an external website.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
