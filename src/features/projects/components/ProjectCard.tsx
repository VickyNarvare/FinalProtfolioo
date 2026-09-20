import { motion, useInView } from 'motion/react';
import { memo, useRef } from 'react';
import { Link } from 'react-router';
import { cn } from '../../../lib/utils';
import { Badge } from '../../../shared/components/Badge';
import { Button } from '../../../shared/components/Button';
import type { Project } from '../../../types/project';
import { ProjectPreview } from './ProjectPreview';

export const ProjectCard = memo(
  ({ project: p, index }: { project: Project; index: number }) => {
    const ref = useRef<HTMLElement>(null);
    const seen = useInView(ref, { once: true, amount: 0.25 });
    return (
      <article
        ref={ref}
        className="grid gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-10 md:py-20"
      >
        <Link
          to={`/projects/${p.slug}`}
          aria-label={`Open ${p.name}`}
          className={cn(
            'group block md:col-span-8',
            index % 2 === 1 && 'md:order-2'
          )}
        >
          <motion.div
            className="overflow-hidden"
            initial={false}
            animate={{
              clipPath: seen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
            }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <ProjectPreview
              project={p}
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </Link>
        <div className="flex flex-col justify-end gap-5 md:col-span-4">
          <p className="font-mono text-xs text-font-light">
            {String(index + 1).padStart(2, '0')} / {p.category}
          </p>
          <h3 className="text-5xl font-extrabold leading-none tracking-tighter md:text-6xl">
            {p.name}
          </h3>
          <p className="text-font-muted">{p.description}</p>
          <ul className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <li key={t}>
                <Badge>{t}</Badge>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button href={`/projects/${p.slug}`} variant="solid">
              View Project
            </Button>
            {p.github && <Button href={p.github}>GitHub</Button>}
          </div>
        </div>
      </article>
    );
  }
);
