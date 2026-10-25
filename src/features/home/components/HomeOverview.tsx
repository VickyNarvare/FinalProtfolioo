import { Link } from 'react-router';
import { Container } from '../../../shared/components/Container';
import { projects } from '../../projects/data/projects';
import { SectionHeading } from '../../../shared/components/SectionHeading';

const overview = [
  {
    number: '01',
    label: 'About',
    title: 'How I got here.',
    description:
      'B.Sc. in computer science, an MCA in progress, and full-stack projects running alongside both.',
    href: '/about',
  },
  {
    number: '02',
    label: 'Projects',
    title: `${projects.length} shipped projects.`,
    description:
      'Ordering flows, admin dashboards, a photography portfolio and two business sites — all live, all documented.',
    href: '/projects',
  },
  {
    number: '03',
    label: 'Skills',
    title: 'From interface to deployment.',
    description:
      'React, Next.js, Node.js, Express, MongoDB and the styling and tooling around them.',
    href: '/skills',
  },
  {
    number: '04',
    label: 'Contact',
    title: 'Have something to build?',
    description:
      'Freelance projects and full-time roles. Send a short brief and I will reply with clear next steps.',
    href: '/contact',
  },
];

export const HomeOverview = () => (
  <section className="border-t border-border py-20 md:py-28">
    <Container>
      <SectionHeading
        size="md"
        label="explore"
        lines={['Where to go next.']}
      />

      <div className="border-t border-border">
        {overview.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="group grid gap-4 border-b border-border py-7 transition-colors hover:bg-background-secondary md:grid-cols-12 md:px-4"
          >
            <span className="font-mono text-[10px] text-font-light md:col-span-1">
              {item.number}
            </span>
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {item.label}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tighter md:text-3xl">
                {item.title}
              </h3>
            </div>
            <p className="max-w-lg text-font-muted md:col-span-5">
              {item.description}
            </p>
            <span className="inline-flex items-center gap-1.5 self-start font-mono text-[10px] uppercase tracking-[0.14em] text-font-light transition-colors group-hover:text-font md:col-span-2 md:self-center md:justify-end">
              Open
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);
