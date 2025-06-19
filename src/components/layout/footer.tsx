import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row sm:px-6 lg:px-8 max-w-7xl">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ML Folio. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-4 sm:mt-0">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
