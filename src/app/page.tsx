import { DuaSuggester } from '@/components/rahma/DuaSuggester';
import { Header } from '@/components/rahma/Header';
import { IslamicCalendar } from '@/components/rahma/IslamicCalendar';
import { Makhraj } from '@/components/rahma/Makhraj';
import { PrayerTimes } from '@/components/rahma/PrayerTimes';
import { QiblaFinder } from '@/components/rahma/QiblaFinder';
import { QuranList } from '@/components/rahma/QuranList';
import { QuranVerse } from '@/components/rahma/QuranVerse';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <PrayerTimes />
            <DuaSuggester />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-1">
            <QuranVerse />
            <IslamicCalendar />
            <QiblaFinder />
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-screen-2xl grid-cols-1 gap-6">
          <Makhraj />
          <QuranList />
        </div>
      </main>
    </div>
  );
}
