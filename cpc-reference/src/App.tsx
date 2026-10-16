import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Clients } from '@/components/Clients';
import { Pillars } from '@/components/Pillars';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Founder } from '@/components/Founder';
import { ConversionSection } from '@/components/ConversionSection';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Inicialização do Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-brand-yellow selection:text-ink">
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Clients />
        <Pillars />
        <Services />
        <Process />
        <Founder />
        <ConversionSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
