'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { QuranIcon } from './QuranIcon';
import { AzkarIcon } from './AzkarIcon';
import { TasbihIcon } from './TasbihIcon';
import { TrackerIcon } from './TrackerIcon';
import { DuasIcon } from './DuasIcon';

const actions = [
  {
    href: '/quran',
    label: 'Quran',
    icon: <QuranIcon className="h-12 w-12" />,
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
    href: '/tracker',
    label: 'Tracker',
    icon: <TrackerIcon className="h-12 w-12" />,
  },
  {
    href: '/duas',
    label: 'Duas',
    icon: <DuasIcon className="h-12 w-12" />,
  },
];

export function QuickActions() {
  return (
    <Card>
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {actions.map((action) => (
          <Link
            href={action.href}
            key={action.href}
            className="group flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-colors hover:bg-secondary/50"
          >
            {action.icon}
            <span className="font-semibold text-foreground">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </Card>
  );
}
