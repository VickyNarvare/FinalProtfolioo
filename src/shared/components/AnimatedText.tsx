import { motion, useReducedMotion } from 'motion/react';
import { cn } from '../../lib/utils';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

/**
 * Reveals text one character at a time. Each character rises out of its own
 * clipping mask with a short blur, which keeps the effect crisp at display
 * sizes. The whole block is hidden from assistive tech, so give the parent an
 * accessible label when using it for a heading.
 */
export const AnimatedText = ({
  text,
  delay = 0,
  className,
}: AnimatedTextProps) => {
  const reducedMotion = useReducedMotion();
  const characters = Array.from(text);

  return (
    <span aria-hidden="true" className={cn('block', className)}>
      {characters.map((character, index) => (
        <span
          key={`${character}-${index}`}
          className="inline-block overflow-hidden pb-[0.06em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={
              reducedMotion
                ? false
                : { y: '110%', opacity: 0, filter: 'blur(8px)' }
            }
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            transition={{
              duration: 0.9,
              delay: reducedMotion ? 0 : delay + index * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {character === ' ' ? '\u00A0' : character}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
