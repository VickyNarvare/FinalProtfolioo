import { Link } from 'react-router';
import { Container } from '../../../shared/components/Container';
import { projects } from '../../projects/data/projects';

const overview = [
  {
    number: '01',
    label: 'About',
    title: 'From learning to building.',
    description:
      'A full stack developer from Indore focused on useful, responsive products and thoughtful user experiences.',
    href: '/about',
  },
  {
    number: '02',
    label: 'Projects',
    title: `${projects.length} projects, shipped with purpose.`,
    description:
      'Explore web apps, business websites and interactive experiences built with modern frontend and backend tools.',
    href: '/projects',
  },
  {
    number: '03',
    label: 'Skills',
    title: 'Frontend to deployment.',
    description:
      'React, Next.js, Node.js, APIs, databases and responsive styling working together as complete systems.',
    href: '/skills',
  },
  {
    number: '04',
    label: 'Contact',
    title: 'Have something to build?',
    description:
      'Available for freelance projects and full-time opportunities. Let us talk about your next idea.',
    href: '/contact',
  },
];

export const HomeOverview = () => (
  <section className="border-t border-border py-20 md:py-28">
    <Container>
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Explore
          </p>
          <h2 className="mt-3 max-w-xl text-4xl font-extrabold leading-[0.9] tracking-tighter md:text-6xl">
            A quick look around.
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-font-muted md:block">
          Small introductions here. Full stories, skills and work live on their
          own pages.
        </p>
      </div>

      <div className="border-t border-border">
        {overview.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="group grid gap-5 border-b border-border py-7 transition-colors hover:bg-background-secondary md:grid-cols-12 md:px-4"
          >
            <span className="font-mono text-xs text-font-light md:col-span-1">
              {item.number}
            </span>
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                {item.label}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tighter md:text-3xl">
                {item.title}
              </h3>
            </div>
            <p className="max-w-lg text-font-muted md:col-span-5">
              {item.description}
            </p>
            <span className="self-end text-sm font-semibold text-font-muted transition-transform duration-300 group-hover:translate-x-2 group-hover:text-primary md:col-span-2 md:self-center md:text-right">
              Read more -&gt;
            </span>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);
