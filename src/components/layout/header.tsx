import Link from 'next/link';
import { CodeXml } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">ML Folio</span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="#projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#ai-assistant" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            AI Assistant
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        {/* TODO: Add mobile navigation (Sheet component) */}
      </div>
    </header>
  );
};

export default Header;
