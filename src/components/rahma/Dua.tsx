'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  morningAzkar,
  eveningAzkar,
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
import { Sun, Moon, BookHeart, ChevronDown } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useState } from 'react';

const azkarCategories = {
  morning: { label: 'Morning', icon: Sun, data: morningAzkar },
  evening: { label: 'Evening', icon: Moon, data: eveningAzkar },
};

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

export function Dua() {
  const [selectedDuaCategory, setSelectedDuaCategory] =
    useState<DuaCategoryKey>('jummah');

  const selectedDuaData = duaCategories[selectedDuaCategory].data;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookHeart className="h-6 w-6 text-primary" />
          Azkar
        </CardTitle>
        <CardDescription>daily routine</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="morning" className="w-full">
          <TabsList>
            {Object.entries(azkarCategories).map(
              ([key, { label, icon: Icon }]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-2"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  {label}
                </TabsTrigger>
              )
            )}
            <TabsTrigger value="duas">Du'as</TabsTrigger>
          </TabsList>
          {Object.entries(azkarCategories).map(([key, { data }]) => (
            <TabsContent key={key} value={key}>
              <ScrollArea className="h-[400px] w-full">
                <div className="space-y-4 p-1">
                  {data.map((dua, index) => (
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
            </TabsContent>
          ))}
          <TabsContent value="duas">
            <div className="mb-4">
              <Select
                value={selectedDuaCategory}
                onValueChange={(value) =>
                  setSelectedDuaCategory(value as DuaCategoryKey)
                }
              >
                <SelectTrigger className="w-full">
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
            <ScrollArea className="h-[340px] w-full">
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
