import { Accordion } from '../../../shared/components/Accordion';
import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { capabilities } from '../../../shared/data/site';

export const Capabilities = () => (
  <section id="capabilities" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading label="capabilities" lines={['What I do well.']} />
      <Accordion items={capabilities} numbered />
    </Container>
  </section>
);
