import { motion } from 'framer-motion';
import { CalendarDays, Sparkles, X } from 'lucide-react';
import { useEffect } from 'react';
import CosmicButton from './CosmicButton';
import { readingPacks } from '../../data/content';

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const Icon = service.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-xl sm:items-center sm:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        className="glass-panel relative my-auto max-h-[calc(100svh-2rem)] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-cosmic-gold/20"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(143,121,201,0.18),transparent_38%)]" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-cosmic-gold/40 hover:text-white"
          aria-label="Close service details"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10 p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cosmic-gold/30 bg-cosmic-gold/10 text-cosmic-gold">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="section-kicker w-fit">Service Ritual</p>
              <h3 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
                {service.title}
              </h3>
            </div>
          </div>

          <p className="section-copy mt-6 text-white/75">{service.summary}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-cosmic-softGold">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em]">
                  Session Includes
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cosmic-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-cosmic-softGold">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.28em]">
                    Session Flow
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  {service.duration}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {service.idealFor}
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-cosmic-gold/18 bg-cosmic-gold/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cosmic-softGold">
                  Ritual Tone
                </p>
                <p className="mt-4 text-sm leading-7 text-white/85">
                  {service.ritual}
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cosmic-softGold">
                  Available Packs
                </p>
                <div className="mt-4 space-y-3">
                  {readingPacks.map((pack) => (
                    <div
                      key={pack.id}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/15 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{pack.title}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/45">
                          {pack.questions}
                        </p>
                      </div>
                      <p className="font-heading text-2xl text-cosmic-softGold">{pack.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CosmicButton href="#booking" onClick={onClose} className="w-full sm:w-auto">
              Reserve This Reading
            </CosmicButton>
            <CosmicButton
              variant="secondary"
              onClick={onClose}
              arrow={false}
              className="w-full sm:w-auto"
            >
              Continue Exploring
            </CosmicButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ServiceModal;
