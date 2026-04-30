import { motion } from 'framer-motion';
import { CalendarDays, MessageCircle, Sparkles, UserRound } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import CosmicButton from '../ui/CosmicButton';
import { readingPacks } from '../../data/content';

const whatsappNumber = '919324454732';

const initialFormState = {
  name: '',
  pack: readingPacks[0].id,
  query: '',
  date: '',
};

function BookingSection() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const selectedPack = readingPacks.find((pack) => pack.id === form.pack) ?? readingPacks[0];
  const queryLabel = form.pack === 'three-question' ? 'Questions or Theme' : 'Question';
  const queryPlaceholder =
    form.pack === 'three-question'
      ? 'Share your three questions, or describe the situation you want explored across three layers.'
      : 'What is the one question you want the cards to illuminate for you?';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Rutuja, I would love to book a tarot reading.

Name: ${form.name || 'Seeker'}
Selected Pack: ${selectedPack.title} (${selectedPack.price})
Question Count: ${selectedPack.questions}
Question / Theme: ${form.query || 'I would like a general reading.'}
Preferred Date: ${form.date || 'To be discussed'}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-anchor relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          kicker="Reserve Your Session"
          title="Leave your question beneath the moonlight, and let the reading find its way to you."
          description="Choose your question pack, shape your inquiry, and send it directly through WhatsApp with a single click. The flow stays private, elegant, and easy to follow."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className="glass-panel rounded-[2rem] border border-white/10 p-6 sm:p-8"
          >
            <div className="section-kicker w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              Booking Ritual
            </div>
            <h3 className="mt-6 font-heading text-3xl text-white sm:text-4xl">
              Your reading begins with intention.
            </h3>
            <p className="mt-5 text-sm leading-8 text-white/72">
              Start by choosing the pack that matches the depth you need, then share the question,
              theme, or season of life you want clarity around.
              Whether your heart feels restless, your work feels unclear, or your spirit simply
              wants confirmation, this first note helps the session arrive with precision.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-cosmic-gold/15 bg-cosmic-gold/10 p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-cosmic-gold" />
                  <p className="font-medium text-white">Choose your reading pack</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  One focused question is available at ₹222, while a deeper three-question spread
                  is available at ₹555.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <UserRound className="h-5 w-5 text-cosmic-gold" />
                  <p className="font-medium text-white">Share your name</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Enter the name you would like the reading to be held under.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-cosmic-gold" />
                  <p className="font-medium text-white">Name the question</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  A sentence or two is enough. Honesty matters more than perfection here.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-cosmic-gold" />
                  <p className="font-medium text-white">Choose your preferred date</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Select the day that feels aligned, and the conversation can begin from there.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="glass-panel rounded-[2rem] border border-cosmic-gold/15 p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <fieldset className="grid gap-3">
                <legend className="text-xs font-semibold uppercase tracking-[0.3em] text-cosmic-softGold">
                  Choose Pack
                </legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {readingPacks.map((pack) => {
                    const isSelected = form.pack === pack.id;

                    return (
                      <label
                        key={pack.id}
                        className={`cursor-pointer rounded-[1.4rem] border p-4 transition ${
                          isSelected
                            ? 'border-cosmic-gold/35 bg-cosmic-gold/10 shadow-pulse'
                            : 'border-white/10 bg-black/20 hover:border-cosmic-gold/20 hover:bg-black/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="pack"
                          value={pack.id}
                          checked={isSelected}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-heading text-2xl text-white">{pack.title}</p>
                            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cosmic-softGold">
                              {pack.questions}
                            </p>
                          </div>
                          <p className="font-heading text-3xl text-cosmic-softGold">
                            {pack.price}
                          </p>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-white/68">{pack.note}</p>
                        <p className="mt-3 text-sm leading-6 text-white/52">
                          {pack.bookingPrompt}
                        </p>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cosmic-softGold">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Who is stepping into the reading?"
                  className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cosmic-gold/40 focus:bg-black/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cosmic-softGold">
                  {queryLabel}
                </span>
                <textarea
                  name="query"
                  value={form.query}
                  onChange={handleChange}
                  rows="5"
                  placeholder={queryPlaceholder}
                  className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cosmic-gold/40 focus:bg-black/30"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cosmic-softGold">
                  Preferred Date
                </span>
                <input
                  type="date"
                  min={today}
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition focus:border-cosmic-gold/40 focus:bg-black/30"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <CosmicButton type="submit" arrow={false} className="w-full sm:w-auto">
                Send to WhatsApp
              </CosmicButton>
              <CosmicButton href="#services" variant="secondary" className="w-full sm:w-auto">
                Review Services
              </CosmicButton>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/55">
              {selectedPack.bookingPrompt}
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-[1.4rem] border border-cosmic-gold/20 bg-cosmic-gold/10 px-4 py-3 text-sm leading-7 text-white/85"
              >
                Your message is ready in WhatsApp. If the window did not open, check your browser popup settings and try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
