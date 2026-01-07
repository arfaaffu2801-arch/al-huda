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

export function PillarsOfIslam() {
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
              <AccordionTrigger className="text-lg font-semibold text-primary">
                {pillar.name} - {pillar.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-4 px-2">
                <p className="text-base">{pillar.description}</p>
                {pillar.arabic && (
                  <div className="rounded-lg border bg-secondary/30 p-4 text-center">
                    <p
                      className="font-headline text-2xl leading-relaxed text-primary"
                      dir="rtl"
                    >
                      {pillar.arabic}
                    </p>
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
    </Card>
  );
}
