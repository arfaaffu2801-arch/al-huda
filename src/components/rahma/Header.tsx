
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/light.png"
            alt="Al-Huda logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold font-headline text-peach-pink">
            Al-Huda
          </span>
        </Link>
        <div className="hidden text-sm text-muted-foreground md:block">
          Your Daily Islamic Companion
        </div>
      </div>
    </header>
  );
}
