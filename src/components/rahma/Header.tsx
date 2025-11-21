import { Book } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Book className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold font-headline text-peach-pink">
            Qudrat-AI-Quran
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/quran"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Qur'an
          </Link>
          <Link
            href="/hadis"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Hadis
          </Link>
          <Link
            href="/names-of-allah"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            99 allah name
          </Link>
          <Link
            href="/duas"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Du'as
          </Link>
          <Link
            href="/azkar"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Azkar
          </Link>
           <Link
            href="/jummah"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Jummah
          </Link>
          <Link
            href="/tasbih"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Tasbih
          </Link>
          <Link
            href="/calendar"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Calendar
          </Link>
          <Link
            href="/qibla"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Qibla
          </Link>
        </nav>
        <div className="hidden text-sm text-muted-foreground md:block">
          Your Daily Islamic Companion
        </div>
      </div>
    </header>
  );
}
