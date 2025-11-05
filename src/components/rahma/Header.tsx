import { Moon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            <Moon className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold font-headline text-primary">
            Rahma Hub
          </span>
        </Link>
        <div className="text-sm text-muted-foreground">
          Your Daily Islamic Companion
        </div>
      </div>
    </header>
  );
}
