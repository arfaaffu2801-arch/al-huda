
'use client';

import { Header } from '@/components/rahma/Header';
import { juzData } from '@/lib/islamic';
import React from 'react';

export default function JuzPage({ params }: { params: { juz: string } }) {
  const juzNumber = parseInt(params.juz, 10);
  const juz = juzData.find((j) => j.juzNumber === juzNumber);

  return (
    <div className="flex h-screen flex-col bg-background font-body">
      <Header />
      <main className="flex-1">
        {juz ? (
          <iframe src={juz.url} className="h-full w-full border-0" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p>Juz not found.</p>
          </div>
        )}
      </main>
    </div>
  );
}
