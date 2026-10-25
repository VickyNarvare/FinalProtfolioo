import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/**
 * Reveals a line by sliding it out of a clipping box. MotionConfig at the app
 * root disables the transform for visitors who prefer reduced motion, so the
 * text is simply visible in that case.
 */
export const Mask = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  return (
    <span
      ref={ref}
      className={cn('block overflow-hidden pb-[0.12em]', className)}
    >
      <motion.span
        className="block"
        initial={false}
        animate={{ y: seen ? 0 : '110%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};
