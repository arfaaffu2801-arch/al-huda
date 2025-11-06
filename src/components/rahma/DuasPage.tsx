'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  jummahDuas,
  mercyDuas,
  forgivenessDuas,
  happinessDuas,
  rizqDuas,
  repentanceDuas,
  rectificationDuas,
  goodnessDuas,
  patienceDuas,
  justiceDuas,
  rabbanaDuas,
  ruqyahDuas,
  protectionDuas,
  reverenceDuas,
  ramadanDuas,
} from '@/lib/islamic';
import { BookHeart } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useState } from 'react';

const duaCategories = {
  jummah: { label: 'Jummah', data: jummahDuas },
  mercy: { label: 'Mercy', data: mercyDuas },
  forgiveness: { label: 'Forgiveness', data: forgivenessDuas },
  happiness: { label: 'Happiness', data: happinessDuas },
  rizq: { label: 'Rizq', data: rizqDuas },
  repentance: { label: 'Repentance', data: repentanceDuas },
  rectification: { label: 'Rectification', data: rectificationDuas },
  goodness: { label: 'Goodness', data: goodnessDuas },
  patience: { label: 'Patience', data: patienceDuas },
  justice: { label: 'Justice', data: justiceDuas },
  rabbana: { label: 'Rabbana', data: rabbanaDuas },
  ruqyah: { label: 'Ruqyah', data: ruqyahDuas },
  protection: { label: 'Protection', data: protectionDuas },
  reverence: { label: 'Reverence', data: reverenceDuas },
  ramadan: { label: 'Ramadan', data: ramadanDuas },
};

type DuaCategoryKey = keyof typeof duaCategories;

export function DuasPage() {
  const [selectedDuaCategory, setSelectedDuaCategory] =
    useState<DuaCategoryKey>('jummah');

  const selectedDuaData = duaCategories[selectedDuaCategory].data;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookHeart className="h-6 w-6 text-primary" />
          Collection of Du'as
        </CardTitle>
        <CardDescription>
          Browse supplications for various needs and occasions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select
            value={selectedDuaCategory}
            onValueChange={(value) =>
              setSelectedDuaCategory(value as DuaCategoryKey)
            }
          >
            <SelectTrigger className="w-full md:w-1/3">
              <SelectValue placeholder="Select a Du'a category" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(duaCategories).map(([key, { label }]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="h-[600px] w-full">
          <div className="space-y-4 p-1">
            {selectedDuaData.map((dua, index) => (
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
  );
}
