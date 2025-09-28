import { BookOpenCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 border-b">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <BookOpenCheck className="size-8 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-headline">
          Examplify
        </h1>
      </div>
    </header>
  );
}
