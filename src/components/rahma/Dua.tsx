
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
  journeyAzkar,
  istikharahDuas,
  enteringHomeAzkar,
  leavingHomeAzkar,
  newClothesAzkar,
  gettingDressedAzkar,
  undressingAzkar,
  enteringRestroomAzkar,
  leavingRestroomAzkar,
} from '@/lib/islamic';
import {
  Sun,
  Moon,
  BookHeart,
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
  Plane,
  Shuffle,
  Shirt,
  Bath,
  Search,
} from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useState } from 'react';
import { Input } from '../ui/input';
import Image from 'next/image';

const azkarCategories = {
  waking: { label: 'Morning azkar', icon: Sunrise, data: wakingUpAzkar },
  morning: { label: 'Before sleeping azkar', icon: Sun, data: morningAzkar },
  beforeAblution: {
    label: 'BEFORE PERFORMING ABLUTION',
    icon: Droplet,
    data: beforeAblutionAzkar,
  },
  afterAblution: {
    label: 'After Ablution',
    icon: Waves,
    data: afterAblutionAzkar,
  },
  enteringRestroom: {
    label: 'Entering Restroom',
    icon: Bath,
    data: enteringRestroomAzkar,
  },
  leavingRestroom: {
    label: 'Leaving Restroom',
    icon: Bath,
    data: leavingRestroomAzkar,
  },
  athan: { label: 'Azkar on hearing Athan', icon: Megaphone, data: athanAzkar },
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
  enteringHome: {
    label: 'When entering the home',
    icon: DoorOpen,
    data: enteringHomeAzkar,
  },
  leavingHome: {
    label: 'When leaving the home',
    icon: DoorClosed,
    data: leavingHomeAzkar,
  },
  gettingDressed: {
    label: 'When getting dressed',
    icon: Shirt,
    data: gettingDressedAzkar,
  },
  undressing: {
    label: 'When undressing',
    icon: Shirt,
    data: undressingAzkar,
  },
  newClothes: {
    label: 'When putting on new clothes',
    icon: Shirt,
    data: newClothesAzkar,
  },
  openingTakbeer: {
    label: 'Dua after the opening takbeer',
    icon: Voicemail,
    data: openingTakbeerDuas,
  },
  ruku: {
    label: 'Duas during ruku',
    icon: ArrowDownCircle,
    data: rukuDuas,
  },
  sujood: {
    label: 'Duas during sujood',
    icon: ArrowDownToDot,
    data: sujoodDuas,
  },
  betweenSujood: {
    label: 'Between two sujood',
    icon: ChevronsUpDown,
    data: betweenSujoodDuas,
  },
  afterTashahhud: {
    label: 'After Tashahhud Azkar',
    icon: Milestone,
    data: afterTashahhudDuas,
  },
  afterPrayer: { label: 'After Prayer', icon: Hand, data: afterPrayerAzkar },
  beforeEating: {
    label: 'Before Eating and Drinking',
    icon: Utensils,
    data: beforeEatingAzkar,
  },
  afterEating: {
    label: 'After Eating and Drinking',
    icon: Utensils,
    data: afterEatingAzkar,
  },
  evening: { label: 'Evening azkar', icon: Moon, data: eveningAzkar },
  journey: {
    label: 'when Undertaking A Journey',
    icon: Plane,
    data: journeyAzkar,
  },
  istikharah: { label: 'Istikharah', icon: Shuffle, data: istikharahDuas },
};

type AzkarCategoryKey = keyof typeof azkarCategories;

export function Dua({ initialCategory }: { initialCategory?: string }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = Object.entries(azkarCategories).filter(
    ([key, { label, data }]) =>
      label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.some(
        (dua) =>
          dua.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dua.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dua.translation.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const displayedCategories = searchTerm ? Object.fromEntries(filteredCategories) : azkarCategories;

  const getFilteredData = (data: typeof morningAzkar) => {
    if (!searchTerm) return data;
    return data.filter(
      (dua) =>
        dua.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dua.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dua.translation.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  return (
    <Card className="relative overflow-hidden">
        <Image
          src="https://picsum.photos/seed/islamic-pattern/1200/800"
          alt="Islamic pattern background"
          fill
          className="absolute inset-0 z-0 object-cover opacity-5"
          data-ai-hint="islamic pattern"
        />
      <div className='relative z-10'>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <BookHeart className="h-6 w-6 text-primary" />
            Azkar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for an Azkar..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Tabs defaultValue={initialCategory || 'waking'} className="w-full">
            <TabsList className="h-auto flex-wrap bg-transparent">
              {Object.entries(displayedCategories).map(
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
            {Object.entries(displayedCategories).map(([key, { data }]) => {
              const filteredData = getFilteredData(data);
              return (
                <TabsContent key={key} value={key}>
                  <ScrollArea className="h-[400px] w-full">
                    <div className="space-y-4 p-1">
                      {filteredData.length > 0 ? (
                        filteredData.map((dua, index) => (
                          <div
                            key={index}
                            className="rounded-lg border bg-background/70 p-4 backdrop-blur-sm"
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
                          <p>No Azkar found for this category.</p>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </div>
    </Card>
  );
}
