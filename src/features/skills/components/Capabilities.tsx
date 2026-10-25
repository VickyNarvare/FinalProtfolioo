import { Accordion } from '../../../shared/components/Accordion';
import { Container } from '../../../shared/components/Container';
import { Reveal } from '../../../shared/components/Reveal';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { capabilities } from '../../../shared/data/site';

export const Capabilities = () => (
  <section
    id="capabilities"
    className="scroll-mt-24 border-t border-border py-20 md:py-28"
  >
    <Container>
      <SectionHeading
        label="Capabilities"
        lines={['The work I take on.']}
        className="mb-8 md:mb-10"
      />
      <Reveal y={20}>
        <Accordion items={capabilities} numbered />
      </Reveal>
    </Container>
  </section>
);
