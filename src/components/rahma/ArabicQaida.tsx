
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArabicQaidaIcon } from './ArabicQaidaIcon';
import { Volume2, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const arabicAlphabet = [
  { letter: 'ا', name: 'Alif' },
  { letter: 'ب', name: 'Ba' },
  { letter: 'ت', name: 'Ta' },
  { letter: 'ث', name: 'Tha' },
  { letter: 'ج', name: 'Jim' },
  { letter: 'ح', name: 'Ha' },
  { letter: 'خ', name: 'Kha' },
  { letter: 'د', name: 'Dal' },
  { letter: 'ذ', name: 'Dhal' },
  { letter: 'ر', name: 'Ra' },
  { letter: 'ز', name: 'Zay' },
  { letter: 'س', name: 'Sin' },
  { letter: 'ش', name: 'Shin' },
  { letter: 'ص', name: 'Sad' },
  { letter: 'ض', name: 'Dad' },
  { letter: 'ط', name: 'Ta' },
  { letter: 'ظ', name: 'Dha' },
  { letter: 'ع', name: "'Ayn" },
  { letter: 'غ', name: 'Ghayn' },
  { letter: 'ف', name: 'Fa' },
  { letter: 'ق', name: 'Qaf' },
  { letter: 'ك', name: 'Kaf' },
  { letter: 'ل', name: 'Lam' },
  { letter: 'م', name: 'Mim' },
  { letter: 'ن', name: 'Nun' },
  { letter: 'ه', name: 'Ha' },
  { letter: 'و', name: 'Waw' },
  { letter: 'ي', name: 'Ya' },
  { letter: 'ء', name: 'Hamza' },
  { letter: 'ﻻ', name: 'Lam Alif' },
];

export function ArabicQaida() {
  const [playingChar, setPlayingChar] = useState<string | null>(null);
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

    if (playingChar === text) {
      setPlayingChar(null);
      return;
    }

    setPlayingChar(text);
    const controller = new AbortController();
    audioControllerRef.current = controller;

    try {
      const { audioDataUri } = await generateAudio({ text: `${text}, ${arabicAlphabet.find(c => c.letter === text)?.name}` });

      if (controller.signal.aborted) {
        return;
      }

      if (audioRef.current) {
        audioRef.current.src = audioDataUri;
        audioRef.current.play();
        audioRef.current.onended = () => {
          setPlayingChar(null);
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
        description: language === 'kn' ? 'ಈ ಅಕ್ಷರಕ್ಕೆ ಆಡಿಯೋ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.' : 'Could not generate audio for this letter.',
      });
      setPlayingChar(null);
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
          <ArabicQaidaIcon className="h-6 w-6" />
          {language === 'kn' ? 'ಅರೇಬಿಕ್ ಕೈದಾ - ವರ್ಣಮಾಲೆ' : 'Arabic Qaida - The Alphabet'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-left sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {arabicAlphabet.map((char) => (
            <div
              key={char.name}
              onClick={() => playAudio(char.letter)}
              className="group flex cursor-pointer flex-col justify-between gap-2 rounded-lg border bg-background/50 p-4 transition-all hover:bg-secondary/50 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <p
                  className="text-left font-headline text-6xl text-primary"
                  dir="rtl"
                >
                  {char.letter}
                </p>
                <div
                  className="p-2 text-muted-foreground"
                  aria-label={`Listen to ${char.name}`}
                >
                  {playingChar === char.letter ? (
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </div>
              </div>
              <p className="font-semibold text-foreground">{char.name}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
