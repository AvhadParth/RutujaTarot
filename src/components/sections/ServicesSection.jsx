import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { readingPacks } from '../../data/content';

function ServicesSection({ services, onSelectService }) {
  return (
    <section id="services" className="section-anchor relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          kicker="Service Rituals"
          title="Choose the reading that matches the question pulling at your spirit."
          description="Choose the guidance theme first, then select the question pack that fits your depth. Every reading is shaped with emotional clarity, symbolic depth, and a premium private atmosphere."
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {readingPacks.map((pack) => (
            <div
              key={pack.id}
              className="glass-panel rounded-[1.8rem] border border-cosmic-gold/15 p-5 text-left"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] text-cosmic-softGold">
                Reading Pack
              </p>
              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="font-heading text-2xl text-white">{pack.title}</p>
                  <p className="mt-2 text-sm text-white/65">{pack.questions}</p>
                </div>
                <p className="font-heading text-3xl text-cosmic-softGold">{pack.price}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/68">{pack.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.button
                key={service.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -10, scale: 1.01 }}
                onClick={() => onSelectService(service)}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${service.accent} p-[1px] text-left shadow-glass`}
              >
                <div className="relative h-full rounded-[calc(2rem-1px)] border border-white/10 bg-[linear-gradient(180deg,rgba(9,3,15,0.92),rgba(18,9,29,0.92))] p-6 sm:p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cosmic-gold/25 bg-cosmic-gold/10 text-cosmic-gold transition duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/35 transition duration-300 group-hover:text-cosmic-softGold" />
                    </div>

                    <div className="mt-8">
                      <p className="text-xs uppercase tracking-[0.3em] text-cosmic-softGold">
                        Signature Reading
                      </p>
                      <h3 className="mt-4 font-heading text-3xl text-white">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/68">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-8 flex-1 space-y-3">
                      {service.includes.slice(0, 3).map((item) => (
                        <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cosmic-gold" />
                          <span className="text-sm leading-6 text-white/70">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-medium text-white/55">{service.duration}</p>
                      <span className="text-xs uppercase tracking-[0.3em] text-cosmic-softGold">
                        Open Details
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
