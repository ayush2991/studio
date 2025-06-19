import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 text-center md:grid-cols-2 md:text-left sm:px-6 lg:px-8">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Aayush Agarwal
          </h1>
          <p className="mt-3 font-headline text-2xl text-primary sm:text-3xl">
            Machine Learning Engineer
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:mx-0">
            Passionate about building intelligent systems that solve real-world problems. Specializing in NLP, AI Agents, and scalable ML solutions.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#projects">View My Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full shadow-2xl md:h-96 md:w-96">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Your Name - ML Engineer"
            layout="fill"
            objectFit="cover"
            data-ai-hint="professional portrait"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
