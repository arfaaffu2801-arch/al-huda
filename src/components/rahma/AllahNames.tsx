'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { allahNames } from '@/lib/allah-names';
import { Search, Star } from 'lucide-react';
import { useState } from 'react';

export function AllahNames() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNames = allahNames.filter(
    (name) =>
      name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Star className="h-6 w-6 text-primary" />
          99 Names of Allah
        </CardTitle>
        <CardDescription>
          Explore the beautiful names of Allah and their meanings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a name..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid h-[600px] grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3">
          {filteredNames.map((name, index) => (
            <div
              key={index}
              className="group flex flex-col gap-2 rounded-lg border p-4 transition-all hover:bg-secondary/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-2xl font-headline text-primary" dir="rtl">
                  {name.name}
                </p>
                <span className="text-sm font-bold text-muted-foreground">
                  {index + 1}
                </span>
              </div>
              <p className="font-semibold text-foreground">
                {name.transliteration}
              </p>
              <p className="text-sm italic text-muted-foreground">
                &ldquo;{name.meaning}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
