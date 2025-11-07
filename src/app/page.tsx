import { Header } from '@/components/rahma/Header';
import { IslamicCalendar } from '@/components/rahma/IslamicCalendar';
import { PrayerTimes } from '@/components/rahma/PrayerTimes';
import { QuranVerse } from '@/components/rahma/QuranVerse';
import { Shahada } from '@/components/rahma/Shahada';
import { TasbihCounter } from '@/components/rahma/TasbihCounter';
import { QuickActions } from '@/components/rahma/QuickActions';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <QuranVerse />
        </div>
        <div className="mx-auto w-full max-w-screen-2xl">
          <QuickActions />
        </div>
        <div className="mx-auto w-full max-w-screen-2xl">
          <Shahada />
        </div>
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6">
          <PrayerTimes />
        </div>
      </main>
    </div>
  );
}
