import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { ProjectGrid } from '../components/ProjectGrid';
import { projects } from '../data/projects';

export const ProjectsPage = () => (
  <div className="pb-16 pt-28 md:pt-32">
    <Container>
      <SectionHeading
        as="h1"
        size="page"
        label="Projects"
        lines={['Case studies, not just screenshots.']}
      />

      <div className="mb-12 grid gap-6 border-t border-border pt-6 md:grid-cols-12">
        <p className="max-w-2xl leading-relaxed text-font-muted md:col-span-7">
          Each build starts with a problem worth solving. Below are the
          decisions, the trade-offs and the working product — not just the
          final screen.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-font-light md:col-span-5 md:text-right">
          {projects.length} projects · live builds and source
        </p>
      </div>

      <ProjectGrid />
    </Container>
  </div>
);
