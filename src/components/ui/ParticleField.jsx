import { useState } from 'react';

function ParticleField() {
  const [particles] = useState(() =>
    Array.from({ length: 38 }, (_, index) => ({
      id: index,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 7 + 3}s`,
      opacity: Math.random() * 0.7 + 0.2,
    })),
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-white/80 mix-blend-screen animate-twinkle"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            opacity: particle.opacity,
            boxShadow: '0 0 14px rgba(212, 175, 55, 0.45)',
          }}
        />
      ))}
      <div className="absolute left-[8%] top-[15%] h-52 w-52 rounded-full bg-cosmic-gold/10 blur-[120px]" />
      <div className="absolute right-[10%] top-[32%] h-72 w-72 rounded-full bg-cosmic-lavender/10 blur-[150px]" />
      <div className="absolute bottom-[8%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cosmic-gold/8 blur-[160px]" />
    </div>
  );
}

export default ParticleField;
