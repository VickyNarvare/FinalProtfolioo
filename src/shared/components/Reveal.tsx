import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  figure: motion.figure,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  dl: motion.dl,
} as const;

type RevealTag = keyof typeof tags;

/**
 * Fades and lifts its content into view the first time it is scrolled to.
 * Elements that start above the fold animate on mount, so the top of every
 * page still feels alive without waiting for a scroll event.
 */
export const Reveal = ({
  children,
  className,
  as = 'div',
  delay = 0,
  y = 28,
  amount = 0.15,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
}) => {
  const reduceMotion = useReducedMotion();
  const Tag = tags[as];

  // Skip the hidden state entirely when the visitor prefers reduced motion,
  // so content is readable straight away.
  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
};
