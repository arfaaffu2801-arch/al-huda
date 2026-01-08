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
  istikharahDuas,
} from '@/lib/islamic';
import { BookHeart, Volume2, Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useState, useRef, useEffect } from 'react';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const duaCategories = {
  jummah: { label: 'Jummah', kannada_label: 'ಜುಮ್ಮಾ', data: jummahDuas },
  mercy: { label: 'Mercy', kannada_label: 'ಕರುಣೆ', data: mercyDuas },
  forgiveness: { label: 'Forgiveness', kannada_label: 'ಕ್ಷಮೆ', data: forgivenessDuas },
  happiness: { label: 'Happiness', kannada_label: 'ಸಂತೋಷ', data: happinessDuas },
  rizq: { label: 'Rizq', kannada_label: 'ರಿಜ್ಕ್', data: rizqDuas },
  repentance: { label: 'Repentance', kannada_label: 'ಪಶ್ಚಾತ್ತಾಪ', data: repentanceDuas },
  rectification: { label: 'Rectification', kannada_label: 'ತಿದ್ದುಪಡಿ', data: rectificationDuas },
  goodness: { label: 'Goodness', kannada_label: 'ಒಳ್ಳೆಯದು', data: goodnessDuas },
  patience: { label: 'Patience', kannada_label: 'ಸಹನೆ', data: patienceDuas },
  justice: { label: 'Justice', kannada_label: 'ನ್ಯಾಯ', data: justiceDuas },
  rabbana: { label: 'Rabbana', kannada_label: 'ರಬ್ಬಾನಾ', data: rabbanaDuas },
  istikharah: { label: 'Istikhara', kannada_label: 'ಇಸ್ತಿಖಾರಾ', data: istikharahDuas },
  ruqyah: { label: 'Ruqyah', kannada_label: 'ರುಕ್ಯಾ', data: ruqyahDuas },
  protection: { label: 'Protection', kannada_label: 'ರಕ್ಷಣೆ', data: protectionDuas },
  reverence: { label: 'Reverence', kannada_label: 'ಗೌರವ', data: reverenceDuas },
  ramadan: { label: 'Ramadan', kannada_label: 'ರಂಜಾನ್', data: ramadanDuas },
};

type DuaCategoryKey = keyof typeof duaCategories;

export function DuasPage() {
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
        description: language === 'kn' ? 'ಈ ದುವಾಕ್ಕೆ ಆಡಿಯೋ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.' : 'Could not generate audio for this dua.',
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


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <BookHeart className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ದುವಾಗಳ ಸಂಗ್ರಹ' : "Collection of Du'as"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="jummah" className="w-full">
          <TabsList className="mb-4 h-auto flex-wrap justify-start">
            {Object.entries(duaCategories).map(([key, { label, kannada_label }]) => (
              <TabsTrigger key={key} value={key}>
                {language === 'kn' ? kannada_label : label}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(duaCategories).map(([key, { data }]) => (
            <TabsContent key={key} value={key}>
              <ScrollArea className="h-[600px] w-full">
                <div className="space-y-4 p-1">
                  {data.map((dua, index) => (
                    <div
                      key={index}
                      className="rounded-lg border bg-secondary/30 p-4"
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
