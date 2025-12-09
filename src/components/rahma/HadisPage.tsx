
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { hadisData } from '@/lib/hadis';
import { Book, Search } from 'lucide-react';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { HadisIcon } from './HadisIcon';

export function HadisPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHadis = hadisData.filter(
    (hadis) =>
      hadis.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadis.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadis.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadis.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <HadisIcon className="h-6 w-6" />
          40 Hadis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a Hadis..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="h-[600px] w-full">
          <div className="space-y-4 p-1">
            {filteredHadis.map((hadis, index) => (
              <div
                key={index}
                className="rounded-lg border bg-secondary/30 p-4"
              >
                <p className="mb-2 text-lg text-primary" dir="rtl">
                  {hadis.arabic}
                </p>
                <p className="mb-2 text-sm text-muted-foreground">
                  {hadis.transliteration}
                </p>
                <p className="italic text-foreground">
                  &ldquo;{hadis.translation}&rdquo;
                </p>
                <p className="mt-2 text-right text-xs text-muted-foreground">
                  - {hadis.reference}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
