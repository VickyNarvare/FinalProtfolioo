import { Button } from '../../../shared/components/Button';
import { Container } from '../../../shared/components/Container';

export const AboutCta = () => (
  <section className="pb-20 md:pb-28">
    <Container>
      <div className="border-y border-border py-10 md:py-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          Next step
        </p>
        <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h2 className="max-w-2xl text-4xl font-extrabold leading-[0.9] tracking-tighter md:text-6xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-font-muted">
              Have a product in mind, an existing site that needs work, or a
              role to fill? Send a short brief and I&apos;ll reply with clear
              next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Button href="/contact" variant="solid">
              Start a project
            </Button>
            <Button href="/projects">See my work</Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
