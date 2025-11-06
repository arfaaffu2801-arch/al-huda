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
import { morningAzkar, eveningAzkar } from '@/lib/islamic';
import { Sun, Moon, BookHeart } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

export function Dua() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookHeart className="h-6 w-6 text-primary" />
          Daily Use Du'a
        </CardTitle>
        <CardDescription>
          Daily supplications for morning and evening.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="morning" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="morning" className="flex items-center gap-2">
              <Sun className="h-5 w-5" />
              Morning
            </TabsTrigger>
            <TabsTrigger value="evening" className="flex items-center gap-2">
              <Moon className="h-5 w-5" />
              Evening
            </TabsTrigger>
          </TabsList>
          <TabsContent value="morning">
            <ScrollArea className="h-[400px] w-full">
              <div className="space-y-4 p-1">
                {morningAzkar.map((azkar, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-secondary/30 p-4"
                  >
                    <p className="mb-2 text-lg text-primary" dir="rtl">
                      {azkar.arabic}
                    </p>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {azkar.transliteration}
                    </p>
                    <p className="italic text-foreground">
                      &ldquo;{azkar.translation}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="evening">
            <ScrollArea className="h-[400px] w-full">
              <div className="space-y-4 p-1">
                {eveningAzkar.map((azkar, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-secondary/30 p-4"
                  >
                    <p className="mb-2 text-lg text-primary" dir="rtl">
                      {azkar.arabic}
                    </p>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {azkar.transliteration}
                    </p>
                    <p className="italic text-foreground">
                      &ldquo;{azkar.translation}&rdquo;
                    </p>
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
