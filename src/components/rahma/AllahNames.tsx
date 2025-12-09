
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { allahNames } from '@/lib/allah-names';
import { Search, Volume2, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { AllahNamesIcon } from './AllahNamesIcon';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';

export function AllahNames() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playingName, setPlayingName] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const filteredNames = allahNames.filter(
    (name) =>
      name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playAudio = async (text: string, transliteration: string) => {
    if (playingName === transliteration) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingName(null);
      return;
    }

    setPlayingName(transliteration);
    try {
      const { audioDataUri } = await generateAudio({ text });
      if (audioRef.current) {
        audioRef.current.src = audioDataUri;
        audioRef.current.play();
        audioRef.current.onended = () => {
          setPlayingName(null);
        };
      }
    } catch (e) {
      console.error('Failed to play audio', e);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate audio for this name.',
      });
      setPlayingName(null);
    }
  };

  useState(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  });

  return (
    <Card className="relative overflow-hidden">
      <Image
        src="https://picsum.photos/seed/islamic-background/1200/800"
        alt="Islamic background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-10"
        data-ai-hint="islamic background"
      />
      <div className="relative z-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <AllahNamesIcon className="h-6 w-6" />
            99 Names of Allah
          </CardTitle>
          <CardDescription>
            Explore the beautiful names of Allah and their meanings. Click a name
            to hear it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for a name..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="grid h-[600px] grid-cols-1 gap-4 overflow-y-auto rounded-lg bg-background/70 p-4 backdrop-blur-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredNames.map((name, index) => (
                <div
                  key={index}
                  onClick={() =>
                    playAudio(name.transliteration, name.transliteration)
                  }
                  className="group flex cursor-pointer flex-col gap-2 rounded-lg border bg-background/50 p-4 transition-all hover:bg-secondary/50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <p
                        className="text-2xl font-headline text-primary"
                        dir="rtl"
                      >
                        {name.name}
                      </p>
                      <p className="font-semibold text-foreground">
                        {name.transliteration}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="p-2 text-muted-foreground"
                        aria-label={`Listen to ${name.transliteration}`}
                      >
                        {playingName === name.transliteration ? (
                          <Loader2 className="h-5 w-5 animate-spin text-primary" />
                        ) : (
                          <Volume2 className="h-5 w-5" />
                        )}
                      </div>
                      <span className="text-sm font-bold text-muted-foreground">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    &ldquo;{name.meaning}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
