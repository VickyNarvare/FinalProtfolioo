import { memo } from 'react';
import { Link } from 'react-router';
import { cn } from '../../../lib/utils';
import { Button } from '../../../shared/components/Button';
import type { Project } from '../../../types/project';
import { ProjectPreview } from './ProjectPreview';

export const ProjectCard = memo(
  ({ project: p, index }: { project: Project; index: number }) => (
    <article className="grid gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <Link
        to={`/projects/${p.slug}`}
        aria-label={`Open ${p.name} case study`}
        className={cn(
          'group block overflow-hidden md:col-span-7 lg:col-span-8',
          index % 2 === 1 && 'md:order-2'
        )}
      >
        <ProjectPreview
          project={p}
          priority={index === 0}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex min-w-0 flex-col md:col-span-5 lg:col-span-4">
        <p className="font-mono text-[11px] text-font-light">
          {String(index + 1).padStart(2, '0')} / {p.category}
        </p>
        <h3 className="mt-4 text-4xl font-medium leading-none tracking-[-0.02em] md:text-5xl">
          <Link
            to={`/projects/${p.slug}`}
            className="underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {p.name}
          </Link>
        </h3>
        <p className="mt-4 max-w-md text-font-muted">
          {p.subtitle ?? p.description}
        </p>
        <p className="mt-5 font-mono text-[11px] leading-relaxed text-font-light">
          {p.tech.join(' / ')}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href={`/projects/${p.slug}`} variant="solid">
            Read case study
          </Button>
          {p.live && <Button href={p.live}>Live site</Button>}
        </div>
      </div>
    </article>
  )
);
