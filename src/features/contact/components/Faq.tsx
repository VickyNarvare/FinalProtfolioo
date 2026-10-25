import { Accordion } from '../../../shared/components/Accordion';
import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { contact, faq } from '../../../shared/data/site';

export const Faq = () => (
  <section id="faq" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading
        size="md"
        label="faq"
        lines={['Answers before we talk.']}
      />
      <Accordion items={faq} />
      <p className="mt-8 text-sm text-font-muted">
        Still have a question?{' '}
        <a
          href={`mailto:${contact.email}`}
          className="text-primary-dark underline decoration-border underline-offset-4 transition-colors hover:decoration-current"
        >
          Email me directly
        </a>
        .
      </p>
    </Container>
  </section>
);
