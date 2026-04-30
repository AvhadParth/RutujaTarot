import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
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
