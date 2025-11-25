
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

const actions = [
  {
    href: '/names-of-allah',
    label: '99 Names',
    icon: <AllahNamesIcon className="h-12 w-12" />,
  },
  {
    href: '/quran',
    label: 'Quran',
    icon: <QuranIcon className="h-12 w-12" />,
  },
  {
    href: '/hadis',
    label: 'Hadis',
    icon: <HadisIcon className="h-12 w-12" />,
  },
  {
    href: '/azkar',
    label: 'Azkar',
    icon: <AzkarIcon className="h-12 w-12" />,
  },
  {
    href: '/tasbih',
    label: 'Tasbih',
    icon: <TasbihIcon className="h-12 w-12" />,
  },
  {
    href: '/duas',
    label: 'Duas',
    icon: <DuasIcon className="h-12 w-12" />,
  },
  {
    href: '/calendar',
    label: 'Calendar',
    icon: <CalendarIcon className="h-12 w-12" />,
  },
];

export function QuickActions() {
  return (
    <Card>
      <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10">
        {actions.map((action) => (
          <Link
            href={action.href}
            key={action.href}
            className="group flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-colors hover:bg-secondary/50"
          >
            {action.icon}
            <span className="text-center font-semibold text-foreground">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </Card>
  );
}
