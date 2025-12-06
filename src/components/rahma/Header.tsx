
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/light.png"
            alt="al-Huda logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold font-headline text-peach-pink">
            al-Huda
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
            href="/surah"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Surah
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
            href="/ofter-namaaz"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Ofter Namaaz
          </Link>
           <Link
            href="/istikhara"
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            Istikhara
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
