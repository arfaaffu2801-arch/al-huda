import { Dua } from '@/components/rahma/Dua';
import { Header } from '@/components/rahma/Header';
import { IslamicCalendar } from '@/components/rahma/IslamicCalendar';
import { PrayerTimes } from '@/components/rahma/PrayerTimes';
import { QuranList } from '@/components/rahma/QuranList';
import { QuranVerse } from '@/components/rahma/QuranVerse';
import { Shahada } from '@/components/rahma/Shahada';
import { TasbihCounter } from '@/components/rahma/TasbihCounter';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <QuranVerse />
        </div>
        <div className="mx-auto w-full max-w-screen-2xl">
          <Shahada />
        </div>
        <div className="mx-auto w-full max-w-screen-2xl">
          <TasbihCounter />
        </div>
        <div className="mx-auto w-full max-w-screen-2xl">
          <QuranList />
        </div>
        <div className="mx-auto w-full max-w-screen-2xl">
          <Dua />
        </div>
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <PrayerTimes />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-1">
            <IslamicCalendar />
          </div>
        </div>
      </main>
    </div>
  );
}
