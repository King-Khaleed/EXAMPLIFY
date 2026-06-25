'use client';

import { GraduationCap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-to-use', label: 'How to Use' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
              <GraduationCap className="size-5 md:size-5.5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl md:text-2xl font-semibold tracking-tight">
              <span className="gold-text">Examplify</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-border">
              <ModeToggle />
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          isMenuOpen
            ? 'bg-black/60 backdrop-blur-sm'
            : 'bg-transparent pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            'fixed top-0 right-0 h-full w-[80%] max-w-sm bg-card border-l border-border/50 shadow-2xl transition-transform duration-300 ease-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-5">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-accent/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-20">
            <ul className="space-y-6 text-center">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="animate-in"
                  style={{ animationDelay: `${100 + index * 80}ms`, animationFillMode: 'backwards' }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'text-2xl font-heading font-semibold transition-all duration-200',
                      pathname === link.href
                        ? 'gold-text'
                        : 'text-foreground/70 hover:text-foreground'
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
