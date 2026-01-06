import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Al-Huda',
  description: 'Your daily Islamic companion.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/al-huda.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/al-huda.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <meta name="application-name" content="Al-Huda" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Al-Huda" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="flex flex-col min-h-screen font-body antialiased">
        <LanguageProvider>
          <div className="flex-grow">{children}</div>
          <Toaster />
          <footer className="w-full bg-card p-4 text-center border-t">
            <p className="text-sm text-muted-foreground">
              Created by Arfa binth Mansoor, hosadurga
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
