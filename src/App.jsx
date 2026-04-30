import { AnimatePresence } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';
import CursorGlow from './components/ui/CursorGlow';
import ParticleField from './components/ui/ParticleField';
import PageOverlay from './components/ui/PageOverlay';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ZodiacSection from './components/sections/ZodiacSection';
import BookingSection from './components/sections/BookingSection';
import Footer from './components/sections/Footer';
import ServiceModal from './components/ui/ServiceModal';
import { services } from './data/content';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  useLayoutEffect(() => {
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (!isMobileViewport && !hasCoarsePointer) {
      return undefined;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    const scrollToHero = () => {
      if (window.location.hash && window.location.hash !== '#home') {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      }

      document.getElementById('home')?.scrollIntoView({ block: 'start' });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToHero();

    const frameId = window.requestAnimationFrame(scrollToHero);
    const timeoutId = window.setTimeout(scrollToHero, 180);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-cosmic text-white">
      <CursorGlow />
      <ParticleField />
      <PageOverlay />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection
          services={services}
          onSelectService={setSelectedService}
        />
        <ZodiacSection />
        <BookingSection />
        <Footer />
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
