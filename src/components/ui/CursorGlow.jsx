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
        className="absolute h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cosmic-gold/15 blur-3xl"
      />
      <motion.div
        style={{ translateX: smoothX, translateY: smoothY }}
        className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cosmic-softGold/40 bg-cosmic-softGold/8 blur-xl"
      />
    </div>
  );
}

export default CursorGlow;
