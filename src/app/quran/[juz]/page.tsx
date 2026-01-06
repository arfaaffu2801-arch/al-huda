'use client';

import { Header } from '@/components/rahma/Header';
import { juzData } from '@/lib/islamic';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function JuzContent() {
  const params = useParams();
  const juzNumber = parseInt(params.juz as string, 10);
  const juz = juzData.find((j) => j.juzNumber === juzNumber);

  if (!juz) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-muted-foreground">Juz not found.</p>
      </div>
    );
  }

  return (
    <Card className="h-[calc(100vh-10rem)]">
      <CardHeader>
        <CardTitle>
          {juz.name} - Juz {juz.juzNumber}
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full pb-6">
        <object
          data={juz.url}
          type="application/pdf"
          width="100%"
          height="100%"
          className="rounded-md"
        >
          <p className="p-4 text-center text-muted-foreground">
            It appears your browser does not have a PDF plugin. You can{' '}
            <a href={juz.url} className="text-primary underline">
              click here to download the PDF file.
            </a>
          </p>
        </object>
      </CardContent>
    </Card>
  );
}

export default function JuzPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-body">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-screen-2xl">
          <Suspense fallback={<div>Loading PDF...</div>}>
            <JuzContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
