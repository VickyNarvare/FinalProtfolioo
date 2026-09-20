import { Link, useParams } from 'react-router';
import { Badge } from '../../../shared/components/Badge';
import { Button } from '../../../shared/components/Button';
import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';
import { contact } from '../../../shared/data/site';
import { ProjectPreview } from '../components/ProjectPreview';
import { projects } from '../data/projects';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];

  if (!p) {
    return (
      <Container className="pt-40">
        <h1 className="text-5xl font-extrabold tracking-tighter">
          Project not found.
        </h1>
        <Link to="/projects" className="mt-6 inline-block text-primary">
          All work
        </Link>
      </Container>
    );
  }

  const next = projects[(i + 1) % projects.length];
  const liveLink = p.live ?? p.demoLink;
  const codeLink = p.github ?? p.codeLink;

  return (
    <Container className="pt-32">
      <article>
        <p className="font-mono text-xs text-font-light">{p.category}</p>
        <h1 className="mt-4 text-[13vw] font-extrabold leading-[0.9] tracking-tighter md:text-[9vw]">
          <Mask>{p.name}</Mask>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-font-muted md:text-xl">
          {p.subtitle}
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <ProjectPreview project={p} />
          </div>
          <div className="flex flex-col gap-6 md:col-span-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-font-light">
                Role
              </span>
              <span className="text-sm text-font-muted">
                {p.role ?? 'Solo Developer'}
              </span>
            </div>

            <p className="text-xl leading-relaxed text-font-muted">
              {p.description}
            </p>

            <ul className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t}>
                  <Badge>{t}</Badge>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {liveLink && (
                <Button href={liveLink} variant="solid">
                  View Live
                </Button>
              )}
              {codeLink && <Button href={codeLink}>GitHub</Button>}
              {!liveLink && (
                <Button
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(p.name)}`}
                >
                  Ask about this project
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="rounded border border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-font-light">
              Problem
            </p>
            <p className="mt-4 text-lg leading-relaxed text-font-muted">
              {p.problem}
            </p>
          </div>

          <div className="rounded border border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-font-light">
              Solution
            </p>
            <p className="mt-4 text-lg leading-relaxed text-font-muted">
              {p.solution}
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded border border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-font-light">
              Key features
            </p>
            <ul className="mt-5 space-y-3 text-font-muted">
              {p.features?.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded border border-border p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-font-light">
              What I learned
            </p>
            <p className="mt-5 text-lg leading-relaxed text-font-muted">
              {p.learned}
            </p>
          </div>
        </div>

        <Link
          to={`/projects/${next.slug}`}
          className="group mt-24 block border-t border-border py-10"
        >
          <span className="font-mono text-xs text-font-light">
            Next project
          </span>
          <span className="block text-5xl font-extrabold tracking-tighter transition-transform duration-500 group-hover:translate-x-4 md:text-8xl">
            {next.name}
          </span>
        </Link>
      </article>
    </Container>
  );
};
