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
  istikharah: { label: 'Istikhara', data: istikharahDuas },
  ruqyah: { label: 'Ruqyah', data: ruqyahDuas },
  protection: { label: 'Protection', data: protectionDuas },
  reverence: { label: 'Reverence', data: reverenceDuas },
  ramadan: { label: 'Ramadan', data: ramadanDuas },
};

type DuaCategoryKey = keyof typeof duaCategories;

export function DuasPage() {
  const [playingDua, setPlayingDua] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

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
        title: 'Error',
        description: 'Could not generate audio for this dua.',
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
          Collection of Du'as
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="jummah" className="w-full">
          <TabsList className="mb-4 h-auto flex-wrap justify-start">
            {Object.entries(duaCategories).map(([key, { label }]) => (
              <TabsTrigger key={key} value={key}>
                {label}
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
