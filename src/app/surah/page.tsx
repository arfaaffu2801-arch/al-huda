
'use client';

import { Header } from '@/components/rahma/Header';
import { SurahDetail } from '@/components/rahma/SurahDetail';
import { SurahList } from '@/components/rahma/SurahList';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SurahContent() {
  const searchParams = useSearchParams();
  const surahNumber = searchParams.get('number');

  if (surahNumber) {
    return <SurahDetail surahNumber={parseInt(surahNumber)} />;
  }

  return <SurahList />;
}

export default function SurahPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <Suspense fallback={<div>Loading...</div>}>
            <SurahContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
