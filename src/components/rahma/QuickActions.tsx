
'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { QuranIcon } from './QuranIcon';
import { AzkarIcon } from './AzkarIcon';
import { TasbihIcon } from './TasbihIcon';
import { DuasIcon } from './DuasIcon';
import { CalendarIcon } from './CalendarIcon';
import { AllahNamesIcon } from './AllahNamesIcon';
import { HadisIcon } from './HadisIcon';
import { HealthIcon } from './HealthIcon';
import { NamazIcon } from './NamazIcon';
import { PillarsOfIslamIcon } from './PillarsOfIslamIcon';
import { useLanguage } from '@/context/LanguageContext';

const actions = [
  {
    href: '/names-of-allah',
    label: '99 Names',
    kannada_label: '99 ಹೆಸರುಗಳು',
    icon: <AllahNamesIcon className="h-12 w-12" />,
  },
  {
    href: '/pillars-of-islam',
    label: '5 Pillars',
    kannada_label: '5 ಸ್ತಂಭಗಳು',
    icon: <PillarsOfIslamIcon className="h-12 w-12" />,
  },
  {
    href: '/quran',
    label: 'Quran',
    kannada_label: 'ಕುರಾನ್',
    icon: <QuranIcon className="h-12 w-12" />,
  },
  {
    href: '/hadis',
    label: 'Hadis',
    kannada_label: 'ಹದೀಸ್',
    icon: <HadisIcon className="h-12 w-12" />,
  },
  {
    href: '/namaz',
    label: 'Namaz',
    kannada_label: 'ನಮಾಝ್',
    icon: <NamazIcon className="h-12 w-12" />,
  },
  {
    href: '/azkar',
    label: 'Azkar',
    kannada_label: 'ಅಜ್ಕಾರ್',
    icon: <AzkarIcon className="h-12 w-12" />,
  },
  {
    href: '/tasbih',
    label: 'Tasbih',
    kannada_label: 'ತಸ್ಬೀಹ್',
    icon: <TasbihIcon className="h-12 w-12" />,
  },
  {
    href: '/duas',
    label: 'Duas',
    kannada_label: 'ದುವಾಗಳು',
    icon: <DuasIcon className="h-12 w-12" />,
  },
  {
    href: '/calendar',
    label: 'Calendar',
    kannada_label: 'ಕ್ಯಾಲೆಂಡರ್',
    icon: <CalendarIcon className="h-12 w-12" />,
  },
  {
    href: '/health-and-wellness',
    label: 'Health',
    kannada_label: 'ಆರೋಗ್ಯ',
    icon: <HealthIcon className="h-12 w-12" />,
  },
];

export function QuickActions() {
  const { language } = useLanguage();
  return (
    <Card>
      <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10">
        {actions.map((action) => (
          <Link
            href={action.href}
            key={action.href}
            className="group flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-all hover:bg-secondary/50 hover:shadow-md"
          >
            {action.icon}
            <span className="text-center font-semibold text-foreground">
              {language === 'kn' ? action.kannada_label : action.label}
            </span>
          </Link>
        ))}
      </div>
    </Card>
  );
}
