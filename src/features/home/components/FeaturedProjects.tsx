import { Link } from 'react-router';
import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { ProjectGrid } from '../../projects/components/ProjectGrid';

export const FeaturedProjects = () => (
  <section id="projects" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading label="selected work" lines={['Selected work.']} />
      <ProjectGrid limit={3} />
      <div className="mt-12 flex justify-end">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-font-muted transition-colors hover:text-primary"
        >
          All projects
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </Container>
  </section>
);
