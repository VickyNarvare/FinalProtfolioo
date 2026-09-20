import { Button } from '../../../shared/components/Button';
import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';

export const Hero = () => (
  <section
    id="home"
    className="flex min-h-svh flex-col justify-between pb-8 pt-28"
  >
    <Container className="flex justify-between font-mono text-xs text-font-muted">
      <span className="flex items-center gap-2">
        <i
          className="size-2 rounded-full bg-primary"
          style={{ animation: 'pulse-dot 2.4s infinite' }}
        />
        Available for work
      </span>
      <span>Indore, India</span>
    </Container>
    <Container>
      <h1 className="text-[19vw] font-extrabold tracking-tighter leading-[0.82] md:text-[17vw]">
        <Mask>Vicky</Mask>
        <Mask delay={0.12} className="md:pl-[10vw]">
          Narvare
        </Mask>
      </h1>
    </Container>
    <Container className="grid items-end gap-8 md:grid-cols-12">
      <p className="text-3xl font-extrabold tracking-tighter md:col-span-4">
        Full Stack Developer
      </p>
      <p className="max-w-md text-font-muted md:col-span-5">
        I build full-stack web applications using React, Next.js, Node.js and
        MongoDB — from responsive interfaces and APIs to deployment.
      </p>
      <div className="flex flex-wrap gap-3 md:col-span-3 md:justify-end">
        <Button href="/projects" variant="solid" magnetic>
          View Work
        </Button>
        <Button href="/contact" magnetic>
          Contact
        </Button>
      </div>
    </Container>
    <Container className="mt-8 font-mono text-xs text-font-light">
      <span aria-hidden="true">scroll ↓</span>
    </Container>
  </section>
);
