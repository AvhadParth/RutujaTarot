import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const sharedClassName =
  'group inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold tracking-[0.12em] transition-colors duration-300';

function CosmicButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  arrow = true,
  type = 'button',
}) {
  const palette =
    variant === 'secondary'
      ? 'border-white/15 bg-white/5 text-white hover:border-cosmic-gold/50 hover:bg-white/10'
      : 'border-cosmic-gold/35 bg-cosmic-gold/90 text-cosmic-950 shadow-aura hover:bg-cosmic-softGold';

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        onClick={onClick}
        className={`${sharedClassName} ${palette} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${sharedClassName} ${palette} ${className}`}
    >
      {content}
    </motion.button>
  );
}

export default CosmicButton;
