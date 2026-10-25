import { Button } from '../../../shared/components/Button';
import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';
import { Reveal } from '../../../shared/components/Reveal';
import { Typewriter } from '../../../shared/components/Typewriter';
import { contact } from '../../../shared/data/site';

const facts = [
  { label: 'Now', value: 'MCA at DAVV · Seriyans Coding School' },
  { label: 'Focus', value: 'MERN stack · performance · motion' },
  { label: 'Reply', value: 'Within 24 hours' },
];

export const Hero = () => (
  <section
    id="home"
    className="flex min-h-svh flex-col justify-between gap-12 pb-10 pt-28 md:pt-32"
  >
    <Reveal y={12}>
      <Container className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
        <p className="flex items-center gap-2 text-font-muted">
          <span className="size-1.5 bg-primary" aria-hidden="true" />
          <Typewriter text="Open to freelance & full-time work" />
        </p>
        <p className="text-font-light">Indore, India</p>
      </Container>
    </Reveal>

    <Container>
      <h1
        aria-label="Vicky Narvare"
        className="text-[18vw] font-semibold leading-[0.82] tracking-[-0.02em] md:text-[16vw]"
      >
        <Mask>Vicky</Mask>
        <Mask delay={0.08} className="md:pl-[9vw]">
          Narvare
        </Mask>
      </h1>
    </Container>

    <Reveal
      as="div"
      className="mx-auto w-full max-w-350 px-5 md:px-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2 md:gap-10 lg:grid-cols-12"
      y={20}
    >
      <div className="lg:col-span-5">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Full-stack development, from first screen to final deploy.
        </h2>
        <p className="mt-3 max-w-md leading-relaxed text-font-muted">
          I design and build React interfaces, Node APIs and the data layer
          behind them — with the accessibility, speed and structure that keep a
          product working long after launch.
        </p>
      </div>

      <dl className="space-y-2.5 text-sm lg:col-span-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex gap-4">
            <dt className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
              {fact.label}
            </dt>
            <dd className="text-font-muted">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col items-start gap-4 md:col-span-2 lg:col-span-3 lg:items-end">
        <Button href="/projects" variant="solid">
          See selected work
        </Button>
        <a
          href={`mailto:${contact.email}`}
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-font-muted underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          {contact.email}
        </a>
      </div>
    </Reveal>
  </section>
);
