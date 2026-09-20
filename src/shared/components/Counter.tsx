import { animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export const Counter = ({
  to,
  suffix = '',
}: {
  to: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const c = animate(0, to, {
      duration: 1.2,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [seen, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};
