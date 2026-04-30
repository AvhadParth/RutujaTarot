import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { zodiacSigns } from '../../data/content';

const zodiacThemes = {
  Fire: {
    glow: 'rgba(212, 175, 55, 0.22)',
    activeFill: 'rgba(68, 32, 112, 0.92)',
    activeStroke: 'rgba(212, 175, 55, 0.42)',
  },
  Earth: {
    glow: 'rgba(174, 203, 126, 0.18)',
    activeFill: 'rgba(42, 58, 41, 0.92)',
    activeStroke: 'rgba(212, 175, 55, 0.42)',
  },
  Air: {
    glow: 'rgba(146, 197, 245, 0.18)',
    activeFill: 'rgba(34, 53, 88, 0.92)',
    activeStroke: 'rgba(212, 175, 55, 0.42)',
  },
  Water: {
    glow: 'rgba(170, 144, 255, 0.22)',
    activeFill: 'rgba(52, 33, 88, 0.92)',
    activeStroke: 'rgba(212, 175, 55, 0.42)',
  },
};

const WHEEL_SIZE = 760;
const WHEEL_CENTER = WHEEL_SIZE / 2;
const OUTER_RADIUS = 350;
const INNER_RADIUS = 208;
const GLYPH_RADIUS = 286;
const NAME_RADIUS = 240;

const toRadians = (degrees) => (degrees * Math.PI) / 180;

const polarToCartesian = (radius, angleDegrees) => ({
  x: WHEEL_CENTER + radius * Math.cos(toRadians(angleDegrees)),
  y: WHEEL_CENTER + radius * Math.sin(toRadians(angleDegrees)),
});

const describeRingSegment = (startAngle, endAngle) => {
  const outerStart = polarToCartesian(OUTER_RADIUS, startAngle);
  const outerEnd = polarToCartesian(OUTER_RADIUS, endAngle);
  const innerEnd = polarToCartesian(INNER_RADIUS, endAngle);
  const innerStart = polarToCartesian(INNER_RADIUS, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
};

function ZodiacSection() {
  const [activeSign, setActiveSign] = useState(zodiacSigns[0]);
  const activeTheme = zodiacThemes[activeSign.element];

  const wheelSigns = useMemo(
    () =>
      zodiacSigns.map((sign, index) => {
        const centerAngle = -90 + index * 30;
        const startAngle = centerAngle - 15;
        const endAngle = centerAngle + 15;
        const glyphPoint = polarToCartesian(GLYPH_RADIUS, centerAngle);
        const namePoint = polarToCartesian(NAME_RADIUS, centerAngle);
        const nameFontSize = sign.name.length > 9 ? 10.5 : 13;
        const nameLetterSpacing = sign.name.length > 9 ? 3.2 : 4.2;

        return {
          ...sign,
          centerAngle,
          startAngle,
          endAngle,
          path: describeRingSegment(startAngle, endAngle),
          glyphPoint,
          namePoint,
          nameFontSize,
          nameLetterSpacing,
        };
      }),
    [],
  );

  return (
    <section id="zodiac" className="section-anchor relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          kicker="Celestial Atlas"
          title="A uniform zodiac wheel with one clear active constellation at its center."
          description="The wheel is structured as a true twelve-part ring, with calmer spacing and clearer typography. Every sign lives inside the same geometry, and the active sign is highlighted without extra noise or scattered motion."
          align="center"
        />

        <div className="mt-16 grid items-start gap-10 xl:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-panel relative overflow-hidden rounded-[2.5rem] border border-cosmic-gold/15 p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(143,121,201,0.18),transparent_32%)]" />
            <div
              className="absolute inset-[14%] rounded-full blur-[110px]"
              style={{ backgroundColor: activeTheme.glow }}
            />

            <div className="relative z-10">
              <svg
                viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
                className="mx-auto aspect-square w-full max-w-[760px]"
                aria-label={`Zodiac wheel with ${activeSign.name} active`}
              >
                <circle
                  cx={WHEEL_CENTER}
                  cy={WHEEL_CENTER}
                  r={OUTER_RADIUS}
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.16)"
                  strokeWidth="1.8"
                />
                <circle
                  cx={WHEEL_CENTER}
                  cy={WHEEL_CENTER}
                  r={INNER_RADIUS}
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.18)"
                  strokeWidth="1.4"
                />

                {wheelSigns.map((sign, index) => {
                  const isActive = sign.id === activeSign.id;

                  return (
                    <g
                      key={sign.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setActiveSign(sign)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setActiveSign(sign);
                        }
                      }}
                      className="cursor-pointer"
                    >
                      <path
                        d={sign.path}
                        fill={isActive ? activeTheme.activeFill : 'rgba(11, 6, 20, 0.88)'}
                        stroke={isActive ? activeTheme.activeStroke : 'rgba(212, 175, 55, 0.12)'}
                        strokeWidth={isActive ? 2 : 1.2}
                        style={{ transition: 'fill 220ms ease, stroke 220ms ease' }}
                      />

                      {index < wheelSigns.length - 1 && (
                        <line
                          x1={WHEEL_CENTER}
                          y1={WHEEL_CENTER}
                          x2={polarToCartesian(OUTER_RADIUS, sign.endAngle).x}
                          y2={polarToCartesian(OUTER_RADIUS, sign.endAngle).y}
                          stroke="rgba(212, 175, 55, 0.1)"
                          strokeWidth="1"
                        />
                      )}

                      <text
                        x={sign.glyphPoint.x}
                        y={sign.glyphPoint.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily="Playfair Display, serif"
                        fontSize="36"
                        fill={isActive ? '#F7E7B0' : '#C39AE8'}
                      >
                        {sign.glyph}
                      </text>
                      <text
                        x={sign.namePoint.x}
                        y={sign.namePoint.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily="Montserrat, sans-serif"
                        fontSize={sign.nameFontSize}
                        letterSpacing={sign.nameLetterSpacing}
                        fill={isActive ? '#FFF6D2' : 'rgba(255,255,255,0.78)'}
                      >
                        {sign.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                <circle
                  cx={WHEEL_CENTER}
                  cy={WHEEL_CENTER}
                  r="152"
                  fill="rgba(12, 6, 20, 0.95)"
                  stroke="rgba(212, 175, 55, 0.2)"
                  strokeWidth="2"
                />
                <circle
                  cx={WHEEL_CENTER}
                  cy={WHEEL_CENTER}
                  r="178"
                  fill="none"
                  stroke="rgba(212, 175, 55, 0.12)"
                  strokeWidth="1.6"
                />
                <text
                  x={WHEEL_CENTER}
                  y={WHEEL_CENTER - 28}
                  textAnchor="middle"
                  fontFamily="Playfair Display, serif"
                  fontSize="84"
                  fill="#FFFFFF"
                >
                  {activeSign.glyph}
                </text>
                <text
                  x={WHEEL_CENTER}
                  y={WHEEL_CENTER + 62}
                  textAnchor="middle"
                  fontFamily="Playfair Display, serif"
                  fontSize="38"
                  fill="#FFFFFF"
                >
                  {activeSign.name}
                </text>
                <text
                  x={WHEEL_CENTER}
                  y={WHEEL_CENTER + 112}
                  textAnchor="middle"
                  fontFamily="Montserrat, sans-serif"
                  fontSize="13"
                  letterSpacing="5"
                  fill="#E8D8A6"
                >
                  {`${activeSign.element.toUpperCase()} • ${activeSign.modality.toUpperCase()}`}
                </text>
              </svg>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              key={activeSign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="glass-panel rounded-[2rem] border border-white/10 p-6 sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.34em] text-cosmic-softGold">
                Cosmic Transmission
              </p>
              <h3 className="mt-5 font-heading text-4xl text-white sm:text-5xl">
                {activeSign.name}
              </h3>
              <p className="mt-6 text-base leading-8 text-white/74 sm:text-lg">
                {activeSign.message}
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div
                key={`${activeSign.id}-focus`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="glass-panel rounded-[1.8rem] border border-white/10 p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-cosmic-softGold">
                  Reading Focus
                </p>
                <p className="mt-4 text-sm leading-7 text-white/78">{activeSign.focus}</p>
              </motion.div>

              <motion.div
                key={`${activeSign.id}-ritual`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="rounded-[1.8rem] border border-cosmic-gold/18 bg-cosmic-gold/10 p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-cosmic-softGold">
                  Ritual Cue
                </p>
                <p className="mt-4 text-sm leading-7 text-white/82">{activeSign.ritual}</p>
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-panel rounded-[1.5rem] border border-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-cosmic-softGold">
                  Element
                </p>
                <p className="mt-3 font-heading text-2xl text-white">{activeSign.element}</p>
              </div>
              <div className="glass-panel rounded-[1.5rem] border border-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-cosmic-softGold">
                  Modality
                </p>
                <p className="mt-3 font-heading text-2xl text-white">{activeSign.modality}</p>
              </div>
              <div className="glass-panel rounded-[1.5rem] border border-white/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-cosmic-softGold">
                  Sign Essence
                </p>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  {activeSign.name} carries a {activeSign.element.toLowerCase()} tone with a{' '}
                  {activeSign.modality.toLowerCase()} rhythm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZodiacSection;
