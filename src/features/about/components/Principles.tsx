import { Container } from '../../../shared/components/Container';
import { Reveal } from '../../../shared/components/Reveal';
import { SectionHeading } from '../../../shared/components/SectionHeading';

const principles = [
  {
    number: '01',
    title: 'Understand the problem first.',
    description:
      'Every build starts with the user, the constraint and the goal. Frameworks come after the problem is clear — not before.',
  },
  {
    number: '02',
    title: 'Keep the code easy to change.',
    description:
      'Clear structure, reusable components and readable logic, so the next feature is easier to add than the last one.',
  },
  {
    number: '03',
    title: 'Treat performance as design.',
    description:
      'Fast loads, responsive layouts and accessible interactions are part of the experience, not an afterthought.',
  },
  {
    number: '04',
    title: 'Stay involved after launch.',
    description:
      'Deployment is a checkpoint, not the finish line. I measure, fix and improve once real users start using the product.',
  },
];

export const Principles = () => (
  <section className="border-t border-border py-24 md:py-32">
    <Container>
      <SectionHeading
        size="lg"
        label="how I work"
        lines={['Principles I build by.']}
      />
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
        {principles.map((principle, index) => (
          <Reveal
            key={principle.number}
            delay={(index % 2) * 0.08}
            className="border-t border-border pt-6"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-font-light">
                {principle.number}
              </span>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
              {principle.title}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-font-muted">
              {principle.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
