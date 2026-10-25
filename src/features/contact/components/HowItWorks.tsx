import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'You share the brief',
    description:
      'Tell me the goal, the scope and your timeline. A few lines is enough to start the conversation.',
  },
  {
    number: '02',
    title: 'I reply within 24 hours',
    description:
      "You'll get an honest assessment, any clarifying questions and a clear next step — no pressure.",
  },
  {
    number: '03',
    title: 'We plan and build',
    description:
      'Once scope and timeline are agreed, I get to work and keep you updated along the way.',
  },
];

export const HowItWorks = () => (
  <section className="border-t border-border py-24 md:py-32">
    <Container>
      <SectionHeading
        size="md"
        label="process"
        lines={['What happens next.']}
      />
      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="border-t border-border pt-6">
            <span className="font-mono text-xs text-font-light">
              {step.number}
            </span>
            <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed text-font-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
