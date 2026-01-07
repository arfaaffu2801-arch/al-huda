
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Volume2, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { TasbihIcon } from './TasbihIcon';
import Image from 'next/image';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';

const tasbihOptions = [
  { text: 'Astaghfirullah', arabic: 'أَسْتَغْفِرُ اللّٰهَ', meaning: 'I seek forgiveness from Allah', target: 100 },
  { text: 'SubhanAllahi wa bihamdihi', arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', meaning: 'Glory is to Allah and praise is to Him', target: 100 },
  { text: 'SubhanAllahil Adheem', arabic: 'سُبْحَانَ اللَّهِ الْعَظِيمِ', meaning: 'Glory is to Allah, the Great', target: 100 },
  { text: 'SubhanAllahi wa bihamdihi, SubhanAllahil Adheem', arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ', meaning: 'Glory is to Allah and praise is to Him, Glory is to Allah, the Great', target: 100 },
  { text: 'SubhanAllah, Alhamdulillah, La ilaha illallah, Allahu Akbar', arabic: 'سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ', meaning: 'Glory be to Allah, Praise be to Allah, There is no god but Allah, Allah is the Greatest', target: 100 },
  { text: 'La ilaha illallahu wahdahu la shareeka lah...', arabic: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', meaning: 'There is no god but Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent.', target: 100 },
  { text: 'La hawla wala quwwata illa billah', arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', meaning: 'There is no might nor power except with Allah.', target: 100 },
  { text: 'A comprehensive praise', arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، سُبْحَانَ اللَّهِ رَبِّ الْعَالَمِينَ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَزِيزِ الْحَكِيمِ', meaning: 'None has the right to be worshipped but Allah alone, without partner. Allah is most great, and much praise is for Allah. How perfect Allah is, Lord of the worlds. There is no might nor power except with Allah, The All-Powerful, The All-Wise.', target: 10 },
  { text: 'A prayer for needs', arabic: 'اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي', meaning: 'O Allah, forgive me, have mercy on me, guide me, grant me well-being, and provide for me.', target: 10 },
  { text: 'Seeking forgiveness', arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ', meaning: 'I seek the forgiveness of Allah the Mighty, Whom there is none worthy of worship except Him, The Ever-Living, The Self-Subsisting, and I repent to Him.', target: 10 },
  { text: 'SubhanAllah', arabic: 'سُبْحَانَ اللّٰهِ', meaning: 'Glory be to Allah', target: 33 },
  { text: 'Alhamdulillah', arabic: 'الْحَمْدُ لِلّٰهِ', meaning: 'Praise be to Allah', target: 33 },
  { text: 'Allahu Akbar', arabic: 'اللّٰهُ أَكْبَرُ', meaning: 'Allah is the Greatest', target: 33 },
  { text: 'La ilaha illallah', arabic: 'لَا إِلَٰهَ إِلَّا اللّٰهُ', meaning: 'There is no god but Allah', target: 100 },
];

export function TasbihCounter() {
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [currentTasbihIndex, setCurrentTasbihIndex] = useState(0);
  const [playingTasbih, setPlayingTasbih] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioControllerRef = useRef<AbortController | null>(null);
  const { toast } = useToast();
  
  const currentTasbih = tasbihOptions[currentTasbihIndex];

  const increment = () => {
    if (count + 1 >= currentTasbih.target) {
      if (currentTasbihIndex === tasbihOptions.length - 1) {
        setCycle(cycle + 1);
      }
      setCurrentTasbihIndex((currentTasbihIndex + 1) % tasbihOptions.length);
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const reset = () => {
    setCount(0);
    setCurrentTasbihIndex(0);
    setCycle(0);
  };

  const selectTasbih = (index: number) => {
    setCurrentTasbihIndex(index);
    setCount(0);
    setCycle(0);
  }

  const playAudio = async (text: string) => {
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }
    
    if (audioControllerRef.current) {
      audioControllerRef.current.abort();
    }

    if (playingTasbih === text) {
      setPlayingTasbih(null);
      return;
    }

    setPlayingTasbih(text);
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
          setPlayingTasbih(null);
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
        description: 'Could not generate audio for this tasbih.',
      });
      setPlayingTasbih(null);
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
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-headline">
            <TasbihIcon className="h-6 w-6 text-primary" />
            Tasbih Counter
          </div>
          <Button variant="ghost" size="icon" onClick={reset}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>
          Click the circle to count your dhikr. It will automatically cycle
          through common tasbih.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-6 p-8">
        <Image
          src="https://picsum.photos/seed/prayer-beads/600/400"
          alt="Tasbih background"
          fill
          className="absolute inset-0 z-0 object-cover opacity-10"
          data-ai-hint="prayer beads"
        />
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-center">
            <div className="flex flex-col items-center gap-4">
                <div className="relative flex h-48 w-48 items-center justify-center">
                <svg className="absolute h-full w-full" viewBox="0 0 100 100">
                    <circle
                    className="text-secondary"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    />
                    <circle
                    className="text-primary transition-all duration-300"
                    strokeWidth="10"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    strokeDasharray={2 * Math.PI * 45}
                    strokeDashoffset={
                        2 * Math.PI * 45 * (1 - count / currentTasbih.target)
                    }
                    />
                </svg>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold">{count}</span>
                    <span className="text-muted-foreground">
                    / {currentTasbih.target}
                    </span>
                </div>
                </div>
                <Button
                onClick={increment}
                className="h-24 w-24 rounded-full bg-primary/20 text-primary shadow-lg hover:bg-primary/30"
                >
                <span className="sr-only">Increment</span>
                </Button>
            </div>

            <div className="relative z-10 text-center md:text-left">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                    <p className="font-headline text-5xl text-primary" dir="rtl">
                        {currentTasbih.arabic}
                    </p>
                    <button
                        onClick={() => playAudio(currentTasbih.arabic)}
                        className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                        aria-label={`Listen to ${currentTasbih.text}`}
                        disabled={playingTasbih === currentTasbih.arabic}
                    >
                        {playingTasbih === currentTasbih.arabic ? (
                        <Loader2 className="h-6 w-6 animate-spin" />
                        ) : (
                        <Volume2 className="h-6 w-6" />
                        )}
                    </button>
                </div>
                <p className="mt-2 text-3xl font-semibold text-foreground">
                    {currentTasbih.text}
                </p>
                <p className="mt-2 text-lg italic text-muted-foreground">
                    &ldquo;{currentTasbih.meaning}&rdquo;
                </p>
                {cycle > 0 && (
                    <p className="mt-4 text-sm text-muted-foreground">Cycle: {cycle}</p>
                )}
            </div>
        </div>
        <div className="relative z-10 mt-8 w-full max-w-2xl">
            <h3 className="mb-4 text-center text-lg font-semibold text-foreground">
                Available Tasbih
            </h3>
            <div className="space-y-2">
                {tasbihOptions.map((tasbih, index) => (
                    <button
                        key={index}
                        onClick={() => selectTasbih(index)}
                        className={`w-full rounded-lg border p-3 text-left transition-colors ${
                            index === currentTasbihIndex
                            ? 'border-primary bg-primary/10'
                            : 'bg-secondary/30 hover:bg-secondary/50'
                        }`}
                    >
                        <div className="flex justify-between items-center flex-wrap">
                          <div className='mb-2 md:mb-0'>
                              <p className="font-semibold">{tasbih.text} ({tasbih.target})</p>
                              <p className="text-sm italic text-muted-foreground">&ldquo;{tasbih.meaning}&rdquo;</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-lg text-primary text-right" dir="rtl">{tasbih.arabic}</p>
                             <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    playAudio(tasbih.arabic)
                                }}
                                className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                                aria-label={`Listen to ${tasbih.text}`}
                                disabled={playingTasbih === tasbih.arabic}
                            >
                                {playingTasbih === tasbih.arabic ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                <Volume2 className="h-5 w-5" />
                                )}
                            </button>
                          </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}

    