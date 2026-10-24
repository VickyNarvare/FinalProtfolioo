import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectGrid = ({ limit }: { limit?: number }) => {
  const visible =
    typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <div>
      {visible.map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} />
      ))}
    </div>
  );
};
