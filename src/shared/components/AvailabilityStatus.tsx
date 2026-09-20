import { Container } from './Container';

export const AvailabilityStatus = () => (
  <div className="pt-24">
    <Container className="flex items-center gap-2 font-mono text-xs text-font-muted">
      <i
        className="size-2 rounded-full bg-primary"
        style={{ animation: 'pulse-dot 2.4s infinite' }}
      />
      <span className="typing-text">Available for work</span>
    </Container>
  </div>
);
