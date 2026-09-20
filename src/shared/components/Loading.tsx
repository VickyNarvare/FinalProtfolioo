import { animate, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const steps = [
  '// starting up',
  '// loading interface',
  '// loading selected work',
  '// ready',
];

export const Loading = ({ onDone }: { onDone: () => void }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const controls = animate(0, 100, {
      duration: reduced ? 0.4 : 2.2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => {
        document.fonts.ready.then(() => {
          if (!cancelled)
            setTimeout(() => !cancelled && onDone(), reduced ? 0 : 250);
        });
      },
    });
    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [onDone]);

  const step = steps[Math.min(steps.length - 1, Math.floor(n / 34))];

  return (
    <motion.div
      aria-busy="true"
      className="fixed inset-0 z-80 flex flex-col justify-between bg-background px-5 py-6 md:px-10"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <span className="sr-only">Loading portfolio</span>

      <div
        className="flex justify-between font-mono text-xs text-font-muted"
        aria-hidden="true"
      >
        <span>Vicky Narvare</span>
        <span>Indore, India</span>
      </div>

      <p className="font-mono text-xs text-primary" aria-hidden="true">
        {step}
      </p>

      <div>
        <div className="flex items-end justify-between" aria-hidden="true">
          <span className="text-[34vw] font-extrabold leading-[0.8] tracking-tighter tabular-nums md:text-[22vw]">
            {String(n).padStart(3, '0')}
          </span>
          <span className="mb-2 font-mono text-xs text-font-muted">%</span>
        </div>
        <div
          role="progressbar"
          aria-label="Loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={n}
          className="mt-6 h-px w-full bg-border"
        >
          <div
            className="h-full origin-left bg-primary"
            style={{ transform: `scaleX(${n / 100})` }}
          />
        </div>
      </div>
    </motion.div>
  );
};
