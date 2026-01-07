
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { hadisData } from '@/lib/hadis';
import { Book, Search, Volume2, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { HadisIcon } from './HadisIcon';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';

export function HadisPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playingHadis, setPlayingHadis] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();

  const filteredHadis = hadisData.filter(
    (hadis) =>
      hadis.arabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadis.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadis.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hadis.reference.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const playAudio = async (text: string, index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (audioControllerRef.current) {
      audioControllerRef.current.abort();
    }
    
    if (playingHadis === index) {
      setPlayingHadis(null);
      return;
    }

    setPlayingHadis(index);
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
          setPlayingHadis(null);
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
        description: 'Could not generate audio for this Hadis.',
      });
      setPlayingHadis(null);
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
          <HadisIcon className="h-6 w-6" />
          40 Hadis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a Hadis..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <ScrollArea className="h-[600px] w-full">
          <div className="space-y-4 p-1">
            {filteredHadis.map((hadis, index) => (
              <div
                key={index}
                className="rounded-lg border bg-secondary/30 p-4"
              >
                <div className="flex justify-between items-start">
                    <p className="mb-2 text-lg text-primary" dir="rtl">
                    {hadis.arabic}
                    </p>
                    <button
                        onClick={() => playAudio(hadis.arabic, index)}
                        className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                        aria-label={`Listen to hadis ${index + 1}`}
                        disabled={playingHadis === index}
                    >
                        {playingHadis === index ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                        <Volume2 className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">
                  {hadis.transliteration}
                </p>
                <p className="italic text-foreground">
                  &ldquo;{hadis.translation}&rdquo;
                </p>
                <p className="mt-2 text-right text-xs text-muted-foreground">
                  - {hadis.reference}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
