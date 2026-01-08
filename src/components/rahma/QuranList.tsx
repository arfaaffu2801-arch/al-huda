
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
import { useLanguage } from '@/context/LanguageContext';

export function QuranList() {
  const [searchTerm, setSearchTerm] = useState('');
  const { language } = useLanguage();

  const filteredJuz = juzData.filter(
    (juz) =>
      juz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `Juz ${juz.juzNumber}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (juz as any).kannada_name?.toLowerCase().includes(searchTerm.toLowerCase())
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
          {language === 'kn' ? 'ಕುರಾನ್' : "Qur'an"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === 'kn' ? 'ಜುಝ್ ಹುಡುಕಿ...' : 'Search for a Juz...'}
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
              href={`/quran/${juz.juzNumber}`}
              className="group flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/50 hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="font-bold">{juz.juzNumber}</span>
              </div>
              <div className="overflow-hidden">
                <p className="truncate font-semibold text-foreground">
                  {language === 'kn' ? (juz as any).kannada_name || juz.name : juz.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === 'kn' ? 'ಜುಝ್' : 'Juz'} {juz.juzNumber}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
