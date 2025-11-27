
import { Header } from '@/components/rahma/Header';
import { Shahada } from '@/components/rahma/Shahada';
import { QuickActions } from '@/components/rahma/QuickActions';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <QuickActions />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-full max-w-screen-2xl">
          <Shahada />
        </div>
      </main>
    </div>
  );
}
