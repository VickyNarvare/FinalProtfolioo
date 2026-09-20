import { Accordion } from '../../../shared/components/Accordion';
import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { faq } from '../../../shared/data/site';

export const Faq = () => (
  <section id="faq" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading label="faq" lines={['Questions.']} />
      <Accordion items={faq} />
    </Container>
  </section>
);
