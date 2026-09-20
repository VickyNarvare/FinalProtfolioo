import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectGrid = () => (
  <div>
    {projects.map((p, i) => (
      <ProjectCard key={p.slug} project={p} index={i} />
    ))}
  </div>
);
