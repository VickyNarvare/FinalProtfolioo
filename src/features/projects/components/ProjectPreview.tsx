import { cn } from '../../../lib/utils';
import type { Project } from '../../../types/project';

export const ProjectPreview = ({
  project: p,
  className,
  priority = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) =>
  p.image ? (
    <img
      src={p.image}
      alt={p.imageAlt ?? `${p.name} preview`}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable={false}
      className={cn('aspect-[1.95/1] w-full object-cover', className)}
    />
  ) : (
    <div
      className={cn(
        'relative flex aspect-[1.95/1] w-full items-end bg-background-secondary p-6 md:p-10',
        className
      )}
    >
      <span className="text-[10vw] font-semibold leading-none tracking-[-0.02em] text-font md:text-[5vw]">
        {p.name}
      </span>
      <span className="absolute right-5 top-4 font-mono text-xs text-font-light">
        preview.png
      </span>
    </div>
  );
