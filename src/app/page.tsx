import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';
import FadeInWrapper from '@/components/ui/fade-in-wrapper';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <FadeInWrapper>
          <HeroSection />
        </FadeInWrapper>
        <FadeInWrapper delay={200}>
          <ProjectsSection />
        </FadeInWrapper>
        <FadeInWrapper delay={400}>
          <ContactSection />
        </FadeInWrapper>
      </main>
      <Footer />
    </>
  );
}
