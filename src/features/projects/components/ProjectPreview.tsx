import { cn } from '../../../lib/utils';
import type { Project } from '../../../types/project';

export const ProjectPreview = ({
  project: p,
  className,
}: {
  project: Project;
  className?: string;
}) =>
  p.image ? (
    <img
      src={p.image}
      alt={p.imageAlt ?? `${p.name} preview`}
      loading="lazy"
      className={cn('aspect-16/10 w-full object-cover', className)}
    />
  ) : (
    <div
      className={cn(
        'relative flex aspect-16/10 w-full items-end p-6 md:p-10',
        className
      )}
      style={{ background: p.tone }}
    >
      <span className="text-[10vw] font-extrabold leading-none tracking-tighter text-[#ede9e0] md:text-[5vw]">
        {p.name}
      </span>
      <span className="absolute right-5 top-4 font-mono text-xs text-[#9a9487]">
        preview.png
      </span>
    </div>
  );
