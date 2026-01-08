
'use client';

import {
  Card,
  CardContent,
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
  Volume2,
  Loader2,
} from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useState, useRef, useEffect } from 'react';
import { Input } from '../ui/input';
import Image from 'next/image';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const azkarCategories = {
  waking: { label: 'Morning azkar', kannada_label: 'ಬೆಳಗಿನ ಅಜ್ಕಾರ್', icon: Sunrise, data: wakingUpAzkar },
  morning: { label: 'Before sleeping azkar', kannada_label: 'ಮಲಗುವ ಮುನ್ನ ಅಜ್ಕಾರ್', icon: Sun, data: morningAzkar },
  beforeAblution: {
    label: 'BEFORE PERFORMING ABLUTION',
    kannada_label: 'ವುಝು ಮಾಡುವ ಮೊದಲು',
    icon: Droplet,
    data: beforeAblutionAzkar,
  },
  afterAblution: {
    label: 'After Ablution',
    kannada_label: 'ವುಝು ನಂತರ',
    icon: Waves,
    data: afterAblutionAzkar,
  },
  enteringRestroom: {
    label: 'Entering Restroom',
    kannada_label: 'ಶೌಚಾಲಯಕ್ಕೆ ಪ್ರವೇಶಿಸುವಾಗ',
    icon: Bath,
    data: enteringRestroomAzkar,
  },
  leavingRestroom: {
    label: 'Leaving Restroom',
    kannada_label: 'ಶೌಚಾಲಯದಿಂದ ಹೊರಬರುವಾಗ',
    icon: Bath,
    data: leavingRestroomAzkar,
  },
  athan: { label: 'Azkar on hearing Athan', kannada_label: 'ಅಝಾನ್ ಕೇಳುವಾಗ', icon: Megaphone, data: athanAzkar },
  enteringMosque: {
    label: 'Entering Mosque',
    kannada_label: 'ಮಸೀದಿ ಪ್ರವೇಶಿಸುವಾಗ',
    icon: DoorOpen,
    data: enteringMosqueAzkar,
  },
  leavingMosque: {
    label: 'Leaving Mosque',
    kannada_label: 'ಮಸೀದಿಯಿಂದ ಹೊರಬರುವಾಗ',
    icon: DoorClosed,
    data: leavingMosqueAzkar,
  },
  enteringHome: {
    label: 'When entering the home',
    kannada_label: 'ಮನೆಗೆ ಪ್ರವೇಶಿಸುವಾಗ',
    icon: DoorOpen,
    data: enteringHomeAzkar,
  },
  leavingHome: {
    label: 'When leaving the home',
    kannada_label: 'ಮನೆಯಿಂದ ಹೊರಡುವಾಗ',
    icon: DoorClosed,
    data: leavingHomeAzkar,
  },
  gettingDressed: {
    label: 'When getting dressed',
    kannada_label: 'ಬಟ್ಟೆ ಧರಿಸುವಾಗ',
    icon: Shirt,
    data: gettingDressedAzkar,
  },
  undressing: {
    label: 'When undressing',
    kannada_label: 'ಬಟ್ಟೆ ಕಳಚುವಾಗ',
    icon: Shirt,
    data: undressingAzkar,
  },
  newClothes: {
    label: 'When putting on new clothes',
    kannada_label: 'ಹೊಸ ಬಟ್ಟೆ ಧರಿಸುವಾಗ',
    icon: Shirt,
    data: newClothesAzkar,
  },
  openingTakbeer: {
    label: 'Dua after the opening takbeer',
    kannada_label: 'ಆರಂಭಿಕ ತಕ್ಬೀರ್ ನಂತರ ದುವಾ',
    icon: Voicemail,
    data: openingTakbeerDuas,
  },
  ruku: {
    label: 'Duas during ruku',
    kannada_label: 'ರುಕು ಸಮಯದಲ್ಲಿ ದುವಾ',
    icon: ArrowDownCircle,
    data: rukuDuas,
  },
  sujood: {
    label: 'Duas during sujood',
    kannada_label: 'ಸುಜೂದ್ ಸಮಯದಲ್ಲಿ ದುವಾ',
    icon: ArrowDownToDot,
    data: sujoodDuas,
  },
  betweenSujood: {
    label: 'Between two sujood',
    kannada_label: 'ಎರಡು ಸುಜೂದ್‌ಗಳ ನಡುವೆ',
    icon: ChevronsUpDown,
    data: betweenSujoodDuas,
  },
  afterTashahhud: {
    label: 'After Tashahhud Azkar',
    kannada_label: 'ತಶಹುದ್ ನಂತರದ ಅಜ್ಕಾರ್',
    icon: Milestone,
    data: afterTashahhudDuas,
  },
  afterPrayer: { label: 'After Prayer', kannada_label: 'ನಮಾಝಿನ ನಂತರ', icon: Hand, data: afterPrayerAzkar },
  beforeEating: {
    label: 'Before Eating and Drinking',
    kannada_label: 'ತಿನ್ನುವ ಮತ್ತು ಕುಡಿಯುವ ಮೊದಲು',
    icon: Utensils,
    data: beforeEatingAzkar,
  },
  afterEating: {
    label: 'After Eating and Drinking',
    kannada_label: 'ತಿಂದ ಮತ್ತು ಕುಡಿದ ನಂತರ',
    icon: Utensils,
    data: afterEatingAzkar,
  },
  evening: { label: 'Evening azkar', kannada_label: 'ಸಂಜೆಯ ಅಜ್ಕಾರ್', icon: Moon, data: eveningAzkar },
  journey: {
    label: 'when Undertaking A Journey',
    kannada_label: 'ಪ್ರಯಾಣ ಮಾಡುವಾಗ',
    icon: Plane,
    data: journeyAzkar,
  },
  istikharah: { label: 'Istikharah', kannada_label: 'ಇಸ್ತಿಖಾರಾ', icon: Shuffle, data: istikharahDuas },
};

type AzkarCategoryKey = keyof typeof azkarCategories;

export function Dua({ initialCategory }: { initialCategory?: string }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [playingDua, setPlayingDua] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  const { language } = useLanguage();

  const playAudio = async (text: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (audioControllerRef.current) {
      audioControllerRef.current.abort();
    }

    if (playingDua === text) {
      setPlayingDua(null);
      return;
    }

    setPlayingDua(text);
    const controller = new AbortController();
    audioControllerRef.current = controller;

    try {
      const { audioDataUri } = await generateAudio({ text });

      if (controller.signal.aborted) {
        return;
      }

      if (audioRef.current) {
        audioRef.current.src = audioDataUri;
        audioRef.current.play();
        audioRef.current.onended = () => {
          setPlayingDua(null);
        };
      }
    } catch (e: any) {
      if (e.name === 'AbortError') {
        console.log('Audio generation aborted.');
        return;
      }
      console.error('Failed to play audio', e);
      toast({
        variant: 'destructive',
        title: language === 'kn' ? 'ದೋಷ' : 'Error',
        description: language === 'kn' ? 'ಈ ಅಜ್ಕಾರ್‌ಗೆ ಆಡಿಯೋ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.' : 'Could not generate audio for this Azkar.',
      });
      setPlayingDua(null);
    } finally {
      if (audioControllerRef.current === controller) {
        audioControllerRef.current = null;
      }
    }
  };

  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (audioControllerRef.current) {
        audioControllerRef.current.abort();
      }
    };
  }, []);

  const filteredCategories = Object.entries(azkarCategories).filter(
    ([key, { label, kannada_label, data }]) =>
      label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kannada_label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.some(
        (dua) =>
          dua.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dua.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dua.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (dua as any).kannada_translation?.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const displayedCategories = searchTerm
    ? Object.fromEntries(filteredCategories)
    : azkarCategories;

  const getFilteredData = (data: typeof morningAzkar) => {
    if (!searchTerm) return data;
    return data.filter(
      (dua) =>
        dua.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dua.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dua.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (dua as any).kannada_translation?.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="relative z-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <BookHeart className="h-6 w-6 text-primary" />
            {language === 'kn' ? 'ಅಜ್ಕಾರ್' : 'Azkar'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={language === 'kn' ? 'ಅಜ್ಕಾರ್ ಹುಡುಕಿ...' : 'Search for an Azkar...'}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Tabs defaultValue={initialCategory || 'waking'} className="w-full">
            <TabsList className="h-auto flex-wrap bg-transparent">
              {Object.entries(displayedCategories).map(
                ([key, { label, kannada_label, icon: Icon }]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="flex items-center gap-2"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                    {language === 'kn' ? kannada_label : label}
                  </TabsTrigger>
                )
              )}
            </TabsList>
            {Object.entries(displayedCategories).map(([key, { data }]) => {
              const filteredData = getFilteredData(data);
              const uniqueId = (dua: any, index: number) => `${key}-${index}-${dua.transliteration.slice(0, 10)}`;

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
                             <div className="flex justify-between items-start">
                                <p className="mb-2 text-lg text-primary" dir="rtl">
                                {dua.arabic}
                                </p>
                                <button
                                    onClick={() => playAudio(dua.arabic)}
                                    className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                                    aria-label={`Listen to dua`}
                                    disabled={playingDua === dua.arabic}
                                >
                                    {playingDua === dua.arabic ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                    <Volume2 className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            <p className="mb-2 text-sm text-muted-foreground">
                              {dua.transliteration}
                            </p>
                            <p className="italic text-foreground">
                              &ldquo;{language === 'kn' ? (dua as any).kannada_translation || dua.translation : dua.translation}&rdquo;
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
                          <p>{language === 'kn' ? 'ಈ ವರ್ಗಕ್ಕೆ ಯಾವುದೇ ಅಜ್ಕಾರ್ ಕಂಡುಬಂದಿಲ್ಲ.' : 'No Azkar found for this category.'}</p>
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
