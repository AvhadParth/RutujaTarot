import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';
import FloatingNav from './FloatingNav';
import CosmicButton from '../ui/CosmicButton';
import { heroHighlights } from '../../data/content';

function HeroSection() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const spreadCardLayouts = ['sm:-rotate-[5deg]', 'sm:translate-y-4', 'sm:rotate-[5deg]'];

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth - 0.5) * 14;
    const y = (event.clientY / innerHeight - 0.5) * 14;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="section-anchor relative flex min-h-[100svh] items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FloatingNav />

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[8%] top-[16%] h-56 w-56 rounded-full bg-cosmic-gold/18 blur-[130px] transition-transform duration-300"
          style={{ transform: `translate3d(${parallax.x * 1.2}px, ${parallax.y * 1.2}px, 0)` }}
        />
        <div
          className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-cosmic-lavender/18 blur-[150px] transition-transform duration-300"
          style={{ transform: `translate3d(${-parallax.x * 1.1}px, ${-parallax.y * 1.1}px, 0)` }}
        />
        <div
          className="absolute bottom-[5%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cosmic-gold/10 blur-[180px] transition-transform duration-300"
          style={{ transform: `translate3d(${parallax.x * 0.6}px, ${-parallax.y * 0.4}px, 0)` }}
        />
      </div>

      <div className="section-shell relative grid min-h-[100svh] items-center gap-10 py-24 sm:gap-12 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="section-kicker">
            <Sparkles className="h-3.5 w-3.5" />
            The Tarot Hub.
          </div>
          <h1 className="mt-8 font-heading text-[clamp(3.3rem,15vw,5rem)] leading-[1.02] text-white sm:text-6xl lg:text-8xl">
            The cards have something to tell you...
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            Enter a private cosmic space with Rutuja Andhale, where intuitive tarot, zodiac symbolism,
            and elegant guidance help illuminate the chapter you are living through now.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <CosmicButton href="#services" className="w-full sm:w-auto">
              Begin Your Reading
            </CosmicButton>
            <CosmicButton href="#services" variant="secondary" className="w-full sm:w-auto">
              Explore the Rituals
            </CosmicButton>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="glass-panel rounded-[1.5rem] border border-white/10 p-4"
              >
                <p className="font-heading text-lg text-white">{highlight.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{highlight.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-[460px] sm:max-w-[540px]"
        >
          <div className="relative rounded-[2.4rem] border border-cosmic-gold/20 bg-black/20 p-5 shadow-aura backdrop-blur-2xl sm:p-7">
            <div className="absolute inset-0 rounded-[2.4rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(143,121,201,0.22),transparent_34%)]" />
            <div className="relative z-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cosmic-softGold">
                    Tonight&apos;s Spread
                  </p>
                  <p className="mt-2 font-heading text-3xl text-white">Celestial Alignment</p>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cosmic-gold/30 bg-cosmic-gold/10 text-cosmic-gold">
                  <Star className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                {['Heart Path', 'Soul Work', 'Future Glow'].map((label, index) => (
                  <div
                    key={label}
                    className={`group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-cardGlow p-2.5 text-center shadow-pulse sm:rounded-[1.6rem] sm:p-4 ${spreadCardLayouts[index]}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative flex aspect-[3/5] flex-col items-center justify-between rounded-[1.1rem] border border-cosmic-gold/20 bg-black/35 px-2 py-3 sm:rounded-[1.25rem] sm:px-3 sm:py-4">
                      <div className="space-y-1 text-cosmic-softGold">
                        <p className="text-[9px] uppercase tracking-[0.24em] sm:text-[10px] sm:tracking-[0.34em]">Arcana</p>
                        <Sparkles className="mx-auto h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <p className="font-heading text-lg leading-tight text-white sm:text-2xl">{label}</p>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/45 sm:text-[11px] sm:tracking-[0.28em]">
                        Reveal
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-3 rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                    Spiritual Atmosphere
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Soft ritual, honest guidance, and a luminous sense of direction.
                  </p>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cosmic-softGold">
                  <ArrowDownRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
