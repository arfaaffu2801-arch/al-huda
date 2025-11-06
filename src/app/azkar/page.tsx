import { Dua } from '@/components/rahma/Dua';
import { Header } from '@/components/rahma/Header';

export default function AzkarPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <Dua />
        </div>
      </main>
    </div>
  );
}
