
import { Header } from '@/components/rahma/Header';
import { HealthAndWellness } from '@/components/rahma/HealthAndWellness';

export default function HealthAndWellnessPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex flex-1 flex-col gap-6 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <HealthAndWellness />
        </div>
      </main>
    </div>
  );
}
