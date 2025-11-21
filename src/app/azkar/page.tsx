'use client';

import { Dua } from '@/components/rahma/Dua';
import { Header } from '@/components/rahma/Header';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AzkarContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  return <Dua initialCategory={category || undefined} />;
}

export default function AzkarPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <Suspense fallback={<div>Loading...</div>}>
            <AzkarContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
