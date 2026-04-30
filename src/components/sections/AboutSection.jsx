import { motion } from 'framer-motion';
import { aboutPillars, readingTouchpoints } from '../../data/content';
import SectionTitle from '../ui/SectionTitle';

const floatingSymbols = [
  { symbol: '♈', top: '10%', left: '14%', delay: '0s' },
  { symbol: '♎', top: '18%', right: '10%', delay: '1s' },
  { symbol: '♏', bottom: '22%', left: '8%', delay: '1.5s' },
  { symbol: '☾', bottom: '14%', right: '12%', delay: '0.6s' },
  { symbol: '✦', top: '44%', left: '2%', delay: '1.2s' },
  { symbol: '♓', top: '48%', right: '2%', delay: '0.4s' },
];

function AboutSection() {
  return (
    <section id="about" className="section-anchor relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          kicker="About Rutuja"
          title="A reader whose presence feels as luminous as the insight she offers."
          description="Rutuja Andhale creates a reading experience that is intimate, refined, and deeply intuitive. Her work blends tarot symbolism, emotional intelligence, and cosmic timing so seekers leave feeling both seen and steadied."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute inset-8 rounded-full bg-cosmic-gold/10 blur-[90px]" />
            <div className="absolute inset-0 rounded-[2.5rem] border border-cosmic-gold/15" />
            <div className="glass-panel relative overflow-hidden rounded-[2.5rem] border border-cosmic-gold/15 p-4 sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_bottom,rgba(143,121,201,0.22),transparent_30%)]" />
              {floatingSymbols.map((item) => (
                <span
                  key={`${item.symbol}-${item.top || item.bottom}-${item.left || item.right}`}
                  className="absolute text-2xl text-cosmic-softGold/70 animate-float"
                  style={{ ...item, animationDelay: item.delay }}
                >
                  {item.symbol}
                </span>
              ))}
              <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-black/25">
                <img
                  src="/rutuja-portrait.svg"
                  alt="Stylized portrait illustration of tarot reader Rutuja Andhale"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-panel rounded-[2rem] border border-white/10 p-6 sm:p-7">
              <p className="text-sm leading-8 text-white/72">
                Her sessions are designed for the moments when intuition feels close,
                but language is still catching up. Whether a client arrives with a question
                about love, work, or an undefined feeling that something is shifting,
                Rutuja helps name the pattern with warmth and spiritual precision.
              </p>
              <p className="mt-4 text-sm leading-8 text-white/72">
                The result is not a performance of mysticism, but a beautifully held
                conversation with the soul of the matter. Cards become mirrors, timing
                becomes clearer, and the next step begins to feel possible again.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: 0.12 * index }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-heading text-2xl text-white">{pillar.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">{pillar.copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4">
              {readingTouchpoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: 0.14 * index }}
                    className="glass-panel flex items-start gap-4 rounded-[1.5rem] border border-white/10 p-5"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cosmic-gold/25 bg-cosmic-gold/10 text-cosmic-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-heading text-2xl text-white">{point.title}</p>
                      <p className="mt-2 text-sm leading-7 text-white/65">{point.copy}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
