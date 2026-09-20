import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import { Container } from '../../../shared/components/Container';
import { journey } from '../../about/data/journey';

export const AboutPreview = () => {
  const [activeJourney, setActiveJourney] = useState(0);
  const timelineRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 35%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextJourney = Math.min(
      journey.length - 1,
      Math.floor(progress * journey.length)
    );

    setActiveJourney(nextJourney);
  });

  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-4xl space-y-5 font-heading leading-relaxed text-font-muted">
          <p className="text-xl font-semibold tracking-tight text-font md:text-2xl">
            I&apos;m Vicky Narvare, a MERN Stack Developer based in Indore,
            India. I build full-stack web applications using MongoDB,
            Express.js, React and Node.js.
          </p>
          <p className="max-w-3xl text-base md:text-lg">
            I work across the complete development cycle, from database design
            and API development to responsive interfaces and production
            deployment.
          </p>
        </div>
        <div className="grid items-end gap-5 border-b border-border pb-6 md:grid-cols-12">
          <h2 className="text-5xl font-extrabold uppercase leading-none tracking-tighter md:col-span-3 md:text-7xl">
            Timeline
          </h2>
          <div className="hidden h-px bg-border md:col-span-7 md:block" />
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-font-light md:col-span-2 md:text-right">
            ({journey.length} entries)
          </span>
        </div>
        <div className="mt-16">
          <ol
            ref={timelineRef}
            className="relative min-w-0 border-l border-border md:ml-8 md:pl-8"
          >
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -left-px top-0 z-10 w-px origin-top bg-primary"
              style={{ height: '100%', scaleY: scrollYProgress }}
            />
            {journey.map((j, index) => (
              <motion.li
                key={`${j.start}-${j.title}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                tabIndex={0}
                onMouseEnter={() => setActiveJourney(index)}
                onFocus={() => setActiveJourney(index)}
                aria-current={activeJourney === index ? 'step' : undefined}
                whileHover={{ x: 6 }}
                className="group relative min-w-0 cursor-default rounded-r-xl py-8 pl-8 pr-3 outline-none transition-colors duration-300 hover:bg-background-secondary focus-visible:bg-background-secondary md:py-12 md:pr-12"
              >
                <span
                  className={`absolute -left-1.25 top-11 z-20 size-2 rounded-full bg-primary transition-transform duration-300 md:top-15 ${
                    activeJourney === index
                      ? 'scale-150 ring-4 ring-primary/20'
                      : ''
                  }`}
                />
                <p className="break-words font-mono text-xs uppercase tracking-[0.14em] text-primary">
                  [ {j.start} - {j.end} ]
                </p>
                <h3 className="mt-4 break-words text-2xl font-extrabold uppercase leading-none tracking-tight md:text-5xl">
                  {j.title}
                </h3>
                <p className="mt-3 break-words text-sm text-font-muted md:text-base">
                  {j.organization}
                </p>
                <p className="mt-3 max-w-3xl break-words text-base leading-relaxed text-font-muted transition-colors duration-300 group-hover:text-font md:text-lg">
                  {j.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};
