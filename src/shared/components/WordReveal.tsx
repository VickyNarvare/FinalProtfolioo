import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

/**
 * Reveals a line word by word from behind a clipping box. Spaces stay between
 * the inline word wrappers so lines still wrap naturally.
 */
export const WordReveal = ({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();
  const words = text.split(/\s+/);

  if (reduceMotion) {
    return <span className={cn('block', className)}>{text}</span>;
  }

  return (
    <span ref={ref} className={cn('block', className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              initial={false}
              animate={{ y: seen ? 0 : '110%' }}
              transition={{
                duration: 0.62,
                delay: delay + index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
};
