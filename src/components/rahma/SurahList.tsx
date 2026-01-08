
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { surahData } from '@/lib/surahs';
import { BookMarked, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { useLanguage } from '@/context/LanguageContext';

export function SurahList() {
  const [searchTerm, setSearchTerm] = useState('');
  const { language } = useLanguage();

  const filteredSurahs = surahData.filter(
    (surah) =>
      surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (surah as any).kannada_translation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookMarked className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ಕುರಾನ್‌ನ ಸೂರಾಗಳು' : "Surahs of the Qur'an"}
        </CardTitle>
        <CardDescription>
          {language === 'kn' ? 'ಪವಿತ್ರ ಕುರ್‌ಆನ್‌ನ 114 ಅಧ್ಯಾಯಗಳ ಮೂಲಕ ಬ್ರೌಸ್ ಮಾಡಿ.' : "Browse through the 114 chapters of the Holy Qur'an."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === 'kn' ? 'ಸೂರಾ ಹುಡುಕಿ...' : 'Search for a Surah...'}
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="h-[600px] w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSurahs.map((surah) => (
              <Link
                key={surah.number}
                href={`/surah?number=${surah.number}`}
                className="group flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-all hover:bg-secondary/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <span className="font-bold">{surah.number}</span>
                </div>
                <div className="overflow-hidden">
                  <p className="truncate font-semibold text-foreground">
                    {surah.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {surah.transliteration}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {language === 'kn' ? (surah as any).kannada_translation || surah.translation : surah.translation} ({language === 'kn' ? `${surah.verses} ವಚನಗಳು` : `${surah.verses} verses`})
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
