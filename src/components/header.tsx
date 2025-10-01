import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <header className="py-4 md:py-6 border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-2 md:gap-3">
            <BookOpenCheck className="size-6 md:size-8 text-primary animate-pulse" />
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground font-headline text-shadow-glow">
            The Web3 Wizard's Academy
            </h1>
        </Link>
        <nav className="flex items-center gap-4">
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
            </Link>
            <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
