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
import { namazData } from '@/lib/islamic';
import { NamazIcon } from './NamazIcon';
import { ScrollArea } from '../ui/scroll-area';
import { Volume2, Loader2, BookOpen } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useLanguage } from '@/context/LanguageContext';

type NamazData = typeof namazData;
type NamazKey = keyof NamazData;

export function NamazPage() {
  const [playingText, setPlayingText] = useState<string | null>(null);
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

    if (playingText === text) {
      setPlayingText(null);
      return;
    }

    setPlayingText(text);
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
          setPlayingText(null);
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
        description: language === 'kn' ? 'ಆಡಿಯೋ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.' : 'Could not generate audio.',
      });
      setPlayingText(null);
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
          <NamazIcon className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ನಮಾಝ್ ಪಠಣಗಳು' : 'Namaz Recitations'}
        </CardTitle>
        <CardDescription>
          {language === 'kn' ? 'ಐದು ದೈನಂದಿನ ನಮಾಝ್‌ಗಳಿಗೆ ಅಗತ್ಯವಾದ ಪಠಣಗಳು.' : 'Essential recitations for the five daily prayers.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="fajr" className="w-full">
          <TabsList className="mb-4 h-auto flex-wrap justify-start">
            {(Object.keys(namazData) as NamazKey[]).map((key) => (
              <TabsTrigger key={key} value={key}>
                {language === 'kn' ? (namazData[key] as any).kannada_name || namazData[key].name : namazData[key].name}
              </TabsTrigger>
            ))}
          </TabsList>
          {(Object.keys(namazData) as NamazKey[]).map((key) => (
            <TabsContent key={key} value={key}>
              <ScrollArea className="h-[600px] w-full">
                <div className="space-y-4 p-1">
                  {namazData[key].steps.map((step, index) => (
                    <div
                      key={index}
                      className="rounded-lg border bg-secondary/30 p-4"
                    >
                      <h3 className="mb-4 text-lg font-bold text-primary flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        {language === 'kn' ? (step as any).kannada_title || step.title : step.title}
                      </h3>
                      <div className="flex justify-between items-start">
                        <p className="mb-2 text-xl text-primary" dir="rtl">
                          {step.arabic}
                        </p>
                        {step.arabic.length < 200 && ( // Avoid audio for long descriptive texts
                          <button
                            onClick={() => playAudio(step.arabic)}
                            className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                            aria-label={`Listen`}
                            disabled={playingText === step.arabic}
                          >
                            {playingText === step.arabic ? (
                              <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                              <Volume2 className="h-5 w-5" />
                            )}
                          </button>
                        )}
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {step.transliteration}
                      </p>
                      <p className="italic text-foreground">
                        &ldquo;{language === 'kn' ? (step as any).kannada_translation || step.translation : step.translation}&rdquo;
                      </p>
                      {step.reference && (
                        <p className="mt-2 text-right text-xs text-muted-foreground">
                          - {step.reference}
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
