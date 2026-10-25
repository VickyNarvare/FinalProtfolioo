import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import { Container } from '../../../shared/components/Container';
import { Reveal } from '../../../shared/components/Reveal';
import { journey } from '../data/journey';

export const Timeline = () => {
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 35%'],
  });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal className="grid items-end gap-5 border-b border-border pb-6 md:grid-cols-12" y={20}>
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Journey
            </p>
            <h2 className="mt-3 text-5xl font-medium uppercase leading-none tracking-[-0.02em] md:text-6xl">
              Timeline
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-relaxed text-font-muted md:col-span-4 md:block">
            Education, training and the work in between.
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-font-light md:col-span-2 md:text-right">
            {journey.length} entries
          </span>
        </Reveal>
        <div className="mt-14">
          <ol
            ref={timelineRef}
            className="relative min-w-0 border-l border-border md:ml-8 md:pl-8"
          >
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -left-px top-0 z-10 w-px origin-top bg-primary"
              style={{ height: '100%', scaleY: scrollYProgress }}
            />
            {journey.map((entry, index) => (
              <motion.li
                key={`${entry.start}-${entry.title}`}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-w-0 py-8 pl-8 pr-3 md:py-10 md:pr-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-1.25 top-11 size-2 rounded-full bg-primary md:top-13"
                />
                <p className="wrap-break-word font-mono text-[11px] uppercase tracking-[0.14em] text-primary-dark">
                  [ {entry.start} - {entry.end} ]
                </p>
                <h3 className="mt-4 wrap-break-word text-2xl font-medium uppercase leading-none tracking-tight md:text-4xl">
                  {entry.title}
                </h3>
                <p className="mt-3 wrap-break-word text-sm text-font-muted md:text-base">
                  {entry.organization}
                </p>
                <p className="mt-3 max-w-3xl wrap-break-word text-base leading-relaxed text-font-muted md:text-lg">
                  {entry.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};
