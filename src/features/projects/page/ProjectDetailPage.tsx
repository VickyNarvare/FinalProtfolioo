import { FiArrowUpRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router';
import { Button } from '../../../shared/components/Button';
import { Container } from '../../../shared/components/Container';
import { contact } from '../../../shared/data/site';
import { ProjectPreview } from '../components/ProjectPreview';
import { projects } from '../data/projects';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <Container className="pt-32 md:pt-40">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
          404
        </p>
        <h1 className="mt-3 text-5xl font-medium tracking-[-0.02em] md:text-7xl">
          Project not found.
        </h1>
        <Link
          to="/projects"
          className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
        >
          Browse all projects
        </Link>
      </Container>
    );
  }

  const next = projects[(index + 1) % projects.length];
  const liveLink = project.live;
  const codeLink = project.github;

  const status =
    liveLink && codeLink
      ? 'Live · source available'
      : liveLink
        ? 'Live'
        : codeLink
          ? 'Source available'
          : 'Case study';

  return (
    <Container className="pb-20 pt-28 md:pt-32">
      <article>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-font-light transition-colors hover:text-primary"
        >
          <span aria-hidden="true">←</span> All projects
        </Link>

        <header className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
              {project.category}
            </p>
            <h1 className="mt-3 break-words text-[clamp(2.75rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.02em]">
              {project.name}
            </h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-font-muted md:col-span-4 md:pb-2">
            {project.subtitle}
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-3">
          {liveLink && (
            <Button href={liveLink} variant="solid">
              Visit live site
            </Button>
          )}
          {codeLink && <Button href={codeLink}>View source</Button>}
          {!liveLink && (
            <Button
              href={`mailto:${contact.email}?subject=${encodeURIComponent(project.name)}`}
            >
              Ask about this project
            </Button>
          )}
        </div>

        <figure className="mt-10 md:mt-14">
          <ProjectPreview project={project} priority />
        </figure>

        <dl className="mt-10 grid gap-6 border-y border-border py-6 sm:grid-cols-3 md:mt-12">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
              Role
            </dt>
            <dd className="mt-2 text-sm text-font">
              {project.role ?? 'Solo Developer'}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
              Built with
            </dt>
            <dd className="mt-2 text-sm text-font">{project.tech.join(', ')}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
              Status
            </dt>
            <dd className="mt-2 flex items-center gap-2 text-sm text-font">
              <span className="size-1.5 bg-primary" aria-hidden="true" />
              {status}
            </dd>
          </div>
        </dl>

        {(project.problem || project.solution) && (
          <section className="mt-16 md:mt-20" aria-labelledby="brief-heading">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-border pb-4">
              <h2
                id="brief-heading"
                className="text-2xl font-medium tracking-tight md:text-3xl"
              >
                The brief
              </h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
                Context → approach
              </p>
            </div>

            <ol>
              <li className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="flex items-start gap-3 md:col-span-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center border border-border bg-background-card font-mono text-[10px] text-primary"
                  >
                    01
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight md:text-xl">
                      The challenge
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
                      What the product needed
                    </p>
                  </div>
                </div>
                <p className="text-xl font-medium leading-snug tracking-tight md:col-span-8 md:text-2xl">
                  {project.problem}
                </p>
              </li>

              <li className="grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="flex items-start gap-3 md:col-span-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center border border-border bg-background-card font-mono text-[10px] text-primary"
                  >
                    02
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight md:text-xl">
                      The approach
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
                      How I solved it
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed text-font-muted md:col-span-8 md:text-lg">
                  {project.solution}
                </p>
              </li>
            </ol>
          </section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <section className="mt-16 md:mt-20" aria-labelledby="build-notes-heading">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-border pb-4">
              <h2
                id="build-notes-heading"
                className="text-2xl font-medium tracking-tight md:text-3xl"
              >
                Build notes
              </h2>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
                {project.challenges.length} problems ·{' '}
                {project.challenges.length} fixes
              </p>
            </div>

            <ol>
              {project.challenges.map((challenge, challengeIndex) => (
                <li
                  key={challenge.problem}
                  className="grid gap-5 border-b border-border py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex size-7 shrink-0 items-center justify-center border border-border bg-background-card font-mono text-[10px] text-primary"
                      >
                        {String(challengeIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-font-light">
                        Problem
                      </h3>
                    </div>
                    <p className="mt-4 font-medium leading-snug tracking-tight md:text-lg">
                      {challenge.problem}
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-5 md:col-span-7 md:pl-8">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                      How I fixed it
                    </h3>
                    <p className="mt-4 leading-relaxed text-font-muted">
                      {challenge.solution}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section className="mt-16 md:mt-20">
            <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                What it does
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
                {project.features.length} features
              </span>
            </div>
            <ul className="grid md:grid-cols-2 md:gap-x-12">
              {project.features.map((feature, featureIndex) => (
                <li
                  key={feature}
                  className="flex gap-4 border-b border-border py-3.5 text-font-muted"
                >
                  <span className="pt-1 font-mono text-[10px] text-font-light">
                    {String(featureIndex + 1).padStart(2, '0')}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 border-l-2 border-primary pl-6 md:mt-20 md:pl-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            What I took away
          </p>
          <p className="mt-3 max-w-3xl text-2xl leading-snug tracking-tight md:text-3xl">
            {project.learned}
          </p>
        </section>

        <Link
          to={`/projects/${next.slug}`}
          className="group mt-20 block border-t border-border py-8"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-font-light">
            Next case study
          </span>
          <span className="mt-2 flex items-center justify-between gap-6">
            <span className="text-4xl font-medium tracking-[-0.02em] transition-colors group-hover:text-primary md:text-6xl">
              {next.name}
            </span>
            <FiArrowUpRight
              aria-hidden="true"
              className="shrink-0 text-font-light transition-[transform,color] duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
              size={28}
            />
          </span>
        </Link>
      </article>
    </Container>
  );
};
