import { Container } from './Container';
import { TypingText } from './TypingText';

export const AvailabilityStatus = () => (
  <div className="pt-24">
    <Container className="flex items-center gap-2 font-mono text-xs text-font-muted">
      <i className="size-2 animate-pulse rounded-full bg-primary" />
      <TypingText text="Available for work" />
    </Container>
  </div>
);
