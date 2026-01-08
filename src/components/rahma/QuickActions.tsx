
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
    hindi_label: '99 नाम',
    marathi_label: '99 नावे',
    icon: <AllahNamesIcon className="h-12 w-12" />,
  },
  {
    href: '/pillars-of-islam',
    label: '5 Pillars',
    kannada_label: '5 ಸ್ತಂಭಗಳು',
    hindi_label: '5 स्तंभ',
    marathi_label: '5 स्तंभ',
    icon: <PillarsOfIslamIcon className="h-12 w-12" />,
  },
  {
    href: '/quran',
    label: 'Quran',
    kannada_label: 'ಕುರಾನ್',
    hindi_label: 'कुरान',
    marathi_label: 'कुराण',
    icon: <QuranIcon className="h-12 w-12" />,
  },
  {
    href: '/hadis',
    label: 'Hadis',
    kannada_label: 'ಹದೀಸ್',
    hindi_label: 'हदीस',
    marathi_label: 'हदीस',
    icon: <HadisIcon className="h-12 w-12" />,
  },
  {
    href: '/namaz',
    label: 'Namaz',
    kannada_label: 'ನಮಾಝ್',
    hindi_label: 'नमाज़',
    marathi_label: 'नमाज़',
    icon: <NamazIcon className="h-12 w-12" />,
  },
  {
    href: '/azkar',
    label: 'Azkar',
    kannada_label: 'ಅಜ್ಕಾರ್',
    hindi_label: 'अज़कार',
    marathi_label: 'अझकार',
    icon: <AzkarIcon className="h-12 w-12" />,
  },
  {
    href: '/tasbih',
    label: 'Tasbih',
    kannada_label: 'ತಸ್ಬೀಹ್',
    hindi_label: 'तस्बीह',
    marathi_label: 'तस्बीह',
    icon: <TasbihIcon className="h-12 w-12" />,
  },
  {
    href: '/duas',
    label: 'Duas',
    kannada_label: 'ದುವಾಗಳು',
    hindi_label: 'दुआएं',
    marathi_label: 'दुआ',
    icon: <DuasIcon className="h-12 w-12" />,
  },
  {
    href: '/calendar',
    label: 'Calendar',
    kannada_label: 'ಕ್ಯಾಲೆಂಡರ್',
    hindi_label: 'कैलेंडर',
    marathi_label: 'कॅलेंडर',
    icon: <CalendarIcon className="h-12 w-12" />,
  },
  {
    href: '/health-and-wellness',
    label: 'Health',
    kannada_label: 'ಆರೋಗ್ಯ',
    hindi_label: 'स्वास्थ्य',
    marathi_label: 'आरोग्य',
    icon: <HealthIcon className="h-12 w-12" />,
  },
];

export function QuickActions() {
  const { language } = useLanguage();

  const getLabel = (action: (typeof actions)[0]) => {
    switch (language) {
      case 'kn':
        return action.kannada_label;
      case 'hi':
        return action.hindi_label;
      case 'mr':
        return action.marathi_label;
      default:
        return action.label;
    }
  };

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
              {getLabel(action)}
            </span>
          </Link>
        ))}
      </div>
    </Card>
  );
}
