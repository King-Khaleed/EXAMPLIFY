'use client';

import { BookOpenCheck, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Disable body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-to-use', label: 'How to Use' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header className="py-4 md:py-6 border-b border-primary/20 sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 md:gap-3"
          >
            <BookOpenCheck className="size-6 md:size-8 text-primary animate-pulse" />
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-foreground font-headline text-shadow-glow">
              The Web3 Wizard's Academy
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-primary'
                    : 'hover:text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out',
          isMenuOpen
            ? 'bg-black/60 backdrop-blur-sm'
            : 'bg-transparent pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            'fixed top-0 right-0 h-full w-[85%] max-w-xs bg-background shadow-2xl transition-transform duration-300 ease-in-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16">
            <ul className="space-y-8 text-center">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="animate-in fade-in slide-in-from-right-12 duration-500"
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'text-2xl font-semibold transition-colors',
                      pathname === link.href
                        ? 'text-primary'
                        : 'hover:text-primary'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
