import { animate, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

export const Typewriter = ({
  text,
  speed = 38,
  startDelay = 0.45,
  className,
}: {
  text: string;
  /** Milliseconds per character. */
  speed?: number;
  startDelay?: number;
  className?: string;
}) => {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    if (reduceMotion) return;

    const controls = animate(0, text.length, {
      duration: (text.length * speed) / 1000,
      delay: startDelay,
      ease: 'linear',
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [reduceMotion, speed, startDelay, text.length]);

  return (
    <span className={cn('inline-grid', className)}>
      <span className="sr-only">{text}</span>
      {/* Reserves the final width so the layout does not jump while typing. */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {text}
      </span>
      <span aria-hidden="true" className="col-start-1 row-start-1">
        {reduceMotion ? text : text.slice(0, count)}
        {!reduceMotion && (
          <motion.span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.12em] bg-primary"
            animate={{ opacity: done ? 0 : [1, 1, 0, 0] }}
            transition={
              done
                ? { duration: 0.25, delay: 0.5 }
                : {
                    duration: 1,
                    repeat: Infinity,
                    times: [0, 0.5, 0.5, 1],
                    ease: 'linear',
                  }
            }
          />
        )}
      </span>
    </span>
  );
};
