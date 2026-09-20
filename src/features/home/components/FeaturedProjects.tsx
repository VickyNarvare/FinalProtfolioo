import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { ProjectGrid } from '../../projects/components/ProjectGrid';

export const FeaturedProjects = () => (
  <section id="projects" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading label="selected work" lines={['Selected work.']} />
      <ProjectGrid />
    </Container>
  </section>
);
