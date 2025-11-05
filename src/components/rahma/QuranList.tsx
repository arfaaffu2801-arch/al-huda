'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { juzData } from '@/lib/islamic';
import { BookMarked, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function QuranList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJuz = juzData.filter(
    (juz) =>
      juz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `Juz ${juz.juzNumber}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card id="quran">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Image
            src="https://picsum.photos/seed/islamic-art/24/24"
            width={24}
            height={24}
            alt="Quran icon"
            className="rounded-sm"
            data-ai-hint="islamic art"
          />
          Qur'an
        </CardTitle>
        <CardDescription>
          Browse through the 30 Juz of the Holy Qur'an.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a Juz..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredJuz.map((juz) => (
            <Link
              key={juz.juzNumber}
              href={juz.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/50 hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="font-bold">{juz.juzNumber}</span>
              </div>
              <div className="overflow-hidden">
                <p className="truncate font-semibold text-foreground">
                  {juz.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Juz {juz.juzNumber}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
