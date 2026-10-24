import { Container } from '../shared/components/Container';
import { Button } from '../shared/components/Button';

export const NotFound = () => (
  <Container className="flex min-h-[75vh] flex-col justify-center pt-32 pb-16">
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
      Error 404
    </p>
    <h1 className="mt-4 text-[20vw] font-extrabold leading-[0.8] tracking-tighter md:text-[11vw]">
      Lost?
    </h1>
    <p className="mt-4 max-w-md text-lg text-font-muted">
      The page you are looking for does not exist or has moved. Let&apos;s get
      you back to something useful.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <Button href="/" variant="solid" magnetic>
        Back home
      </Button>
      <Button href="/projects" magnetic>
        View work
      </Button>
    </div>
  </Container>
);
