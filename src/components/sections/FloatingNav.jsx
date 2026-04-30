import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CosmicButton from '../ui/CosmicButton';
import { navigation } from '../../data/content';

function FloatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-30 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <div className="mx-auto flex w-full max-w-content items-center justify-between rounded-full border border-white/10 bg-black/25 px-3.5 py-2.5 backdrop-blur-2xl sm:px-6 sm:py-3">
        <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cosmic-gold/35 bg-cosmic-gold/10 font-heading text-base text-cosmic-gold sm:h-10 sm:w-10 sm:text-lg">
            RA
          </span>
          <div className="min-w-0">
            <p className="truncate font-heading text-base leading-none text-white sm:text-lg">
              Rutuja Andhale
            </p>
            <p className="truncate text-[9px] uppercase tracking-[0.22em] text-white/55 sm:text-[10px] sm:tracking-[0.3em]">
              Tarot Reader
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-cosmic-softGold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CosmicButton href="#booking" className="px-5 py-2.5 text-xs" arrow={false}>
            Book a Session
          </CosmicButton>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 rounded-full border border-white/10 bg-white/5 p-2.5 text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 w-full max-w-content rounded-[1.75rem] border border-white/10 bg-black/40 p-4 backdrop-blur-2xl lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export default FloatingNav;
