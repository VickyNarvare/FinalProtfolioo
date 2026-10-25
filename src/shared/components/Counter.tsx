import { animate, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to a number when the stat enters the viewport. The accessible
 * label always exposes the final value, so screen readers never hear a stream
 * of changing numbers.
 */
export const Counter = ({
  value,
  prefix = '',
  suffix = '',
  delay = 0,
  duration = 1.1,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [delay, duration, inView, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {prefix}
        {reduceMotion ? value : display}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
};
