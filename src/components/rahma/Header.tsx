'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          {pathname !== '/' && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/al-huda.jpeg"
              alt="Al-Huda logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold font-headline text-peach-pink">
              Al-Huda
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="language-toggle" className="text-sm font-medium">
            EN
          </Label>
          <Switch
            id="language-toggle"
            checked={language === 'kn'}
            onCheckedChange={toggleLanguage}
            aria-label="Toggle language"
          />
          <Label htmlFor="language-toggle" className="text-sm font-medium">
            KN
          </Label>
        </div>
      </div>
    </header>
  );
}
