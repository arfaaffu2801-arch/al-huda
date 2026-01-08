
'use client';

import { useState } from 'react';
import { Header } from '@/components/rahma/Header';
import { Shahada } from '@/components/rahma/Shahada';
import { QuickActions } from '@/components/rahma/QuickActions';
import { QuranChatbot } from '@/components/rahma/QuranChatbot';
import { WelcomeScreen } from '@/components/rahma/WelcomeScreen';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <>
          <div className="mx-auto w-full max-w-screen-2xl">
            <Shahada />
          </div>
          <div className="mx-auto w-full max-w-screen-2xl">
            <QuickActions />
          </div>
          <div className="mx-auto w-full max-w-screen-2xl">
            <QuranChatbot />
          </div>
        </>
      </main>
    </div>
  );
}
