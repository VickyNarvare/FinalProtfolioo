import { Reveal } from '../../../shared/components/Reveal';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectGrid = ({ limit }: { limit?: number }) => {
  const visible =
    typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <div>
      {visible.map((p, i) => (
        <div key={p.slug} className="lg:sticky lg:top-20 lg:bg-background">
          <Reveal delay={Math.min(i * 0.06, 0.24)} y={32}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        </div>
      ))}
    </div>
  );
};
