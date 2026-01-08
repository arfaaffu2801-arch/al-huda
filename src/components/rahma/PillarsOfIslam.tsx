'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PillarsOfIslamIcon } from './PillarsOfIslamIcon';
import { Separator } from '../ui/separator';
import { BookOpenCheck, Volume2, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { generateAudio } from '@/ai/flows/text-to-speech-flow';
import { useToast } from '@/hooks/use-toast';

const pillars = [
  {
    name: 'The Shahada',
    title: 'The Testimony of Faith',
    description:
      'The Shahada is the declaration of faith, affirming that there is no god but Allah and that Muhammad is His messenger. It is the foundation upon which all other pillars are built.',
    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
    transliteration: 'lā ʾilāha ʾillā-llāh, muḥammadun rasūlu-llāh',
  },
  {
    name: 'Salat',
    title: 'Prayer',
    description:
      'Salat is the ritual prayer performed five times a day, facing the Kaaba in Mecca. It is a direct line of communication with Allah, providing spiritual nourishment and discipline.',
  },
  {
    name: 'Zakat',
    title: 'Charity',
    description:
      "Zakat is the obligatory giving of a portion of one's wealth to the poor and needy. It purifies wealth, fosters compassion, and ensures economic justice in the community.",
  },
  {
    name: 'Sawm',
    title: 'Fasting',
    description:
      'Sawm is the act of fasting from dawn until dusk during the month of Ramadan. It is a time for spiritual reflection, self-discipline, and empathy for the less fortunate.',
  },
  {
    name: 'Hajj',
    title: 'Pilgrimage',
    description:
      'Hajj is the annual pilgrimage to the holy city of Mecca in Saudi Arabia. It is a religious duty that must be carried out at least once in a lifetime by all adult Muslims who are physically and financially capable of undertaking the journey.',
  },
];

const articlesOfFaith = [
  {
    name: 'Belief in Allah',
    description: 'To believe that there is only one God, Allah, the sole creator and sustainer of the universe.',
  },
  {
    name: 'Belief in the Angels',
    description: 'To believe in the existence of angels as honored servants of Allah, created from light, who carry out His commands.',
  },
  {
    name: 'Belief in the Holy Books',
    description: "To believe in the divine books revealed by Allah to His messengers, including the Tawrat (Torah), Zabur (Psalms), Injil (Gospel), and the final revelation, the Qur'an.",
  },
  {
    name: 'Belief in the Prophets',
    description: 'To believe in all the prophets and messengers sent by Allah, from Adam to the final prophet, Muhammad (peace be upon them all).',
  },
  {
    name: 'Belief in the Day of Judgment',
    description: 'To believe in the Last Day, when all of humanity will be resurrected and held accountable for their deeds.',
  },
  {
    name: 'Belief in Divine Decree (Qadr)',
    description: 'To believe that everything, both good and bad, happens by the will and knowledge of Allah.',
  },
];

export function PillarsOfIslam() {
  const [playingText, setPlayingText] = useState<string | null>(null);
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
        title: 'Error',
        description: 'Could not generate audio.',
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
          <PillarsOfIslamIcon className="h-6 w-6" />
          The Five Pillars of Islam
        </CardTitle>
        <CardDescription>
          The fundamental practices of Islam that are obligatory for all Muslims.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {pillars.map((pillar, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold text-primary text-left">
                {pillar.name} - {pillar.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-4 px-2">
                 <div className="flex items-start justify-between gap-2">
                    <p className="text-base flex-1">{pillar.description}</p>
                    <button
                        onClick={() => playAudio(`${pillar.title}. ${pillar.description}`)}
                        className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                        aria-label={`Listen`}
                        disabled={playingText === `${pillar.title}. ${pillar.description}`}
                    >
                        {playingText === `${pillar.title}. ${pillar.description}` ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                        <Volume2 className="h-5 w-5" />
                        )}
                    </button>
                </div>
                {pillar.arabic && (
                  <div className="rounded-lg border bg-secondary/30 p-4 text-center">
                    <div className="flex justify-center items-center gap-4">
                        <p
                        className="font-headline text-2xl leading-relaxed text-primary"
                        dir="rtl"
                        >
                        {pillar.arabic}
                        </p>
                         <button
                            onClick={() => playAudio(pillar.arabic)}
                            className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                            aria-label={`Listen`}
                            disabled={playingText === pillar.arabic}
                        >
                            {playingText === pillar.arabic ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                            <Volume2 className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      {pillar.transliteration}
                    </p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>

      <Separator className="my-6" />

      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            The Six Pillars of Iman (Faith)
        </CardTitle>
        <CardDescription>
            The core beliefs that a Muslim must have.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
            {articlesOfFaith.map((article, index) => (
            <AccordionItem value={`faith-item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-primary">
                {article.name}
                </AccordionTrigger>
                <AccordionContent className="space-y-4 px-2">
                    <div className="flex items-start justify-between gap-2">
                        <p className="text-base flex-1">{article.description}</p>
                        <button
                            onClick={() => playAudio(`${article.name}. ${article.description}`)}
                            className="p-2 text-muted-foreground hover:text-primary disabled:text-primary"
                            aria-label={`Listen`}
                            disabled={playingText === `${article.name}. ${article.description}`}
                        >
                            {playingText === `${article.name}. ${article.description}` ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                            <Volume2 className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
      </CardContent>

    </Card>
  );
}
