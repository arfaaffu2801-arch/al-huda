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
  morningAzkar,
  eveningAzkar,
  sleepingAzkar,
  wakingUpAzkar,
} from '@/lib/islamic';
import { Sun, Moon, BookHeart, Bed, Sunrise } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const azkarCategories = {
  morning: { label: 'Morning', icon: Sun, data: morningAzkar },
  evening: { label: 'Evening', icon: Moon, data: eveningAzkar },
  sleeping: { label: 'Before Sleeping', icon: Bed, data: sleepingAzkar },
  waking: { label: 'Waking Up', icon: Sunrise, data: wakingUpAzkar },
};

export function Dua() {
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
        </Tabs>
      </CardContent>
    </Card>
  );
}
