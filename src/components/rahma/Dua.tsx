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
  afterPrayerAzkar,
  openingTakbeerDuas,
  afterTashahhudDuas,
  rukuDuas,
  sujoodDuas,
  athanAzkar,
  betweenSujoodDuas,
  enteringMosqueAzkar,
  leavingMosqueAzkar,
  beforeAblutionAzkar,
  afterAblutionAzkar,
  afterEatingAzkar,
  beforeEatingAzkar,
} from '@/lib/islamic';
import {
  Sun,
  Moon,
  BookHeart,
  Bed,
  Sunrise,
  Hand,
  Voicemail,
  Milestone,
  ArrowDownCircle,
  ArrowDownToDot,
  Megaphone,
  ChevronsUpDown,
  DoorOpen,
  DoorClosed,
  Droplet,
  Waves,
  Utensils,
} from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const azkarCategories = {
  waking: { label: 'Waking Up', icon: Sunrise, data: wakingUpAzkar },
  morning: { label: 'Morning', icon: Sun, data: morningAzkar },
  beforeAblution: {
    label: 'Before Ablution',
    icon: Droplet,
    data: beforeAblutionAzkar,
  },
  afterAblution: {
    label: 'After Ablution',
    icon: Waves,
    data: afterAblutionAzkar,
  },
  athan: { label: 'Athan', icon: Megaphone, data: athanAzkar },
  enteringMosque: {
    label: 'Entering Mosque',
    icon: DoorOpen,
    data: enteringMosqueAzkar,
  },
  leavingMosque: {
    label: 'Leaving Mosque',
    icon: DoorClosed,
    data: leavingMosqueAzkar,
  },
  openingTakbeer: {
    label: 'After Takbeer',
    icon: Voicemail,
    data: openingTakbeerDuas,
  },
  ruku: {
    label: 'During Ruku',
    icon: ArrowDownCircle,
    data: rukuDuas,
  },
  sujood: {
    label: 'During Sujood',
    icon: ArrowDownToDot,
    data: sujoodDuas,
  },
  betweenSujood: {
    label: 'Between Sujood',
    icon: ChevronsUpDown,
    data: betweenSujoodDuas,
  },
  afterTashahhud: {
    label: 'After Tashahhud',
    icon: Milestone,
    data: afterTashahhudDuas,
  },
  afterPrayer: { label: 'After Prayer', icon: Hand, data: afterPrayerAzkar },
  beforeEating: {
    label: 'Before Eating',
    icon: Utensils,
    data: beforeEatingAzkar,
  },
  afterEating: {
    label: 'After Eating',
    icon: Utensils,
    data: afterEatingAzkar,
  },
  evening: { label: 'Evening', icon: Moon, data: eveningAzkar },
  sleeping: { label: 'Before Sleeping', icon: Bed, data: sleepingAzkar },
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
        <Tabs defaultValue="waking" className="w-full">
          <TabsList className="h-auto flex-wrap">
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
                  {data.length > 0 ? (
                    data.map((dua, index) => (
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
                    ))
                  ) : (
                    <div className="flex h-48 items-center justify-center text-muted-foreground">
                      <p>No Azkar added for this category yet.</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
