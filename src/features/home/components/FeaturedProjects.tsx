import { Link } from 'react-router';
import { Container } from '../../../shared/components/Container';
import { Reveal } from '../../../shared/components/Reveal';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { projects } from '../../projects/data/projects';
import { ProjectGrid } from '../../projects/components/ProjectGrid';

export const FeaturedProjects = () => (
  <section id="projects" className="scroll-mt-24 py-20 md:py-28">
    <Container>
      <SectionHeading
        label="Selected work"
        lines={['Work that had a real problem to solve.']}
      />
      <ProjectGrid limit={3} />
      <Reveal className="mt-10 flex justify-end" y={16}>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-font-muted transition-colors hover:text-primary"
        >
          All {projects.length} projects
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </Reveal>
    </Container>
  </section>
);
