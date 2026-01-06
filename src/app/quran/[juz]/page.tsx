'use client';

import { Header } from '@/components/rahma/Header';
import { juzData } from '@/lib/islamic';
import { useParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Loader2 } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function JuzContent() {
  const params = useParams();
  const juzNumber = parseInt(params.juz as string, 10);
  const juz = juzData.find((j) => j.juzNumber === juzNumber);
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

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
      <CardContent className="h-full overflow-y-auto pb-6">
        <Document
          file={juz.url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          }
          error={
             <p className="p-4 text-center text-destructive">
                Failed to load PDF. You can try to{' '}
                <a href={juz.url} className="text-primary underline" download>
                  download it directly.
                </a>
            </p>
          }
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} />
          ))}
        </Document>
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
