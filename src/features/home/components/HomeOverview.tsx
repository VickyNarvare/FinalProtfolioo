import { Link } from 'react-router';
import { Container } from '../../../shared/components/Container';
import { Reveal } from '../../../shared/components/Reveal';
import { projects } from '../../projects/data/projects';
import { SectionHeading } from '../../../shared/components/SectionHeading';

const overview = [
  {
    number: '01',
    label: 'About',
    title: 'How I got here.',
    description:
      'A computer science graduate, an MCA candidate and a developer who likes the whole build — interface, API and data.',
    href: '/about',
  },
  {
    number: '02',
    label: 'Projects',
    title: `${projects.length} shipped projects.`,
    description:
      'Ordering flows, an admin-backed storefront, a photography portfolio and two business sites. All live, all documented.',
    href: '/projects',
  },
  {
    number: '03',
    label: 'Skills',
    title: 'From interface to deployment.',
    description:
      'The stack I actually ship with: React, Next.js, Node.js, Express, MongoDB, and the styling and motion around them.',
    href: '/skills',
  },
  {
    number: '04',
    label: 'Contact',
    title: 'Have something to build?',
    description:
      'Freelance projects and full-time roles. Send a short brief and I will reply within 24 hours with a clear next step.',
    href: '/contact',
  },
];

export const HomeOverview = () => (
  <section className="border-t border-border py-20 md:py-28">
    <Container>
      <SectionHeading
        size="md"
        label="index"
        lines={['The short version.']}
      />

      <div className="border-t border-border">
        {overview.map((item, index) => (
          <Reveal key={item.href} delay={Math.min(index * 0.05, 0.2)} y={20}>
            <Link
              to={item.href}
              className="group grid gap-4 border-b border-border py-7 transition-colors hover:bg-background-secondary md:grid-cols-12 md:px-4"
            >
              <span className="font-mono text-[10px] text-font-light md:col-span-1">
                {item.number}
              </span>
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {item.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
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
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
