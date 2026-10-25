import { Button } from '../../shared/components/Button';
import { Container } from '../../shared/components/Container';
import { Reveal } from '../../shared/components/Reveal';
import { contact } from '../../shared/data/site';

export const ContactBand = () => (
  <section className="border-y border-border bg-background-secondary">
    <Container className="grid gap-10 py-16 md:grid-cols-12 md:items-end md:py-24">
      <Reveal as="div" className="md:col-span-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          Next step
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.02em] md:text-6xl">
          Have something that needs building?
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-font-muted">
          Send a short brief — what you are making, who it is for, and when it
          needs to be live. I reply within 24 hours.
        </p>
      </Reveal>

      <Reveal
        as="div"
        delay={0.08}
        className="flex flex-col items-start gap-4 md:col-span-5 md:items-end"
      >
        <Button href="/contact" variant="solid">
          Start a conversation
        </Button>
        <a
          href={`mailto:${contact.email}`}
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-font-muted underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          {contact.email}
        </a>
      </Reveal>
    </Container>
  </section>
);
