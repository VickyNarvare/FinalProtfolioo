import { Button } from '../../../shared/components/Button';
import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';
import { contact } from '../../../shared/data/site';

const facts = [
  { label: 'Now', value: 'MCA at DAVV · Seriyans Coding School' },
  { label: 'Focus', value: 'Full-stack web applications' },
  { label: 'Open to', value: 'Freelance & full-time' },
];

export const Hero = () => (
  <section
    id="home"
    className="flex min-h-svh flex-col justify-between gap-12 pb-10 pt-28 md:pt-32"
  >
    <Container className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
      <p className="flex items-center gap-2 text-font-muted">
        <span className="size-1.5 bg-primary" aria-hidden="true" />
        Available for new projects
      </p>
      <p className="text-font-light">Indore, India</p>
    </Container>

    <Container>
      <h1
        aria-label="Vicky Narvare"
        className="text-[18vw] font-medium leading-[0.82] tracking-[-0.02em] md:text-[16vw]"
      >
        <Mask>Vicky</Mask>
        <Mask delay={0.08} className="md:pl-[9vw]">
          Narvare
        </Mask>
      </h1>
    </Container>

    <Container className="grid gap-8 border-t border-border pt-8 md:grid-cols-2 md:gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          MERN stack developer
        </h2>
        <p className="mt-3 max-w-md leading-relaxed text-font-muted">
          I build full-stack products end to end: React interfaces, Node APIs
          and the database underneath.
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
    </Container>
  </section>
);
