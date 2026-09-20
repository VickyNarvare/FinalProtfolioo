import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

/** Text-mask reveal. Observes the static wrapper (not the moving text) so it always triggers. */
export const Mask = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  return (
    <span ref={ref} className={cn("block overflow-hidden pb-[0.06em]", className)}>
      <motion.span
        className="block"
        initial={false}
        animate={{ y: seen ? 0 : "112%" }}
        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
};
