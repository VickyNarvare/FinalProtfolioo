import { motion } from 'motion/react';
import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';

const tags = [
  'Frontend',
  'Backend',
  'APIs',
  'Databases',
  'Authentication',
  'Deployment',
  'Interactive experiences',
];

export const Intro = () => (
  <section className="overflow-hidden py-24 md:py-40">
    <Container>
      <h2 className="text-5xl font-extrabold tracking-tighter leading-[0.85] md:text-8xl">
        <Mask>I build digital experiences</Mask>
        <Mask delay={0.1}>that work beyond the screen.</Mask>
      </h2>
    </Container>
    <div className="mt-14 border-y border-border py-5" aria-hidden="true">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        className="flex w-max gap-12 font-mono text-sm text-font-muted"
      >
        {[...tags, ...tags].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </motion.div>
    </div>
  </section>
);
