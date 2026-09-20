import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { ProjectGrid } from '../components/ProjectGrid';

export const ProjectsPage = () => (
  <section className="min-h-screen py-32">
    <Container>
      <SectionHeading label="projects" lines={['Selected work.']} />
      <ProjectGrid />
    </Container>
  </section>
);
