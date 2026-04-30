import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

function CursorGlow() {
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const smoothX = useSpring(x, { damping: 26, stiffness: 180, mass: 0.4 });
  const smoothY = useSpring(y, { damping: 26, stiffness: 180, mass: 0.4 });

  useEffect(() => {
    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener('pointermove', handleMove);

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      <motion.div
        style={{ translateX: smoothX, translateY: smoothY }}
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cosmic-gold/12 blur-2xl"
      />
      <motion.div
        style={{ translateX: smoothX, translateY: smoothY }}
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cosmic-softGold/45 bg-cosmic-softGold/18 shadow-[0_0_18px_rgba(212,175,55,0.2)]"
      />
    </div>
  );
}

export default CursorGlow;
