import { Link } from 'react-router';
import type { IconType } from 'react-icons';
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaKey,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa6';
import {
  SiExpress,
  SiFramer,
  SiGreensock,
  SiJavascript,
  SiMongoose,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';
import { skills } from '../data/skills';

const skillIcons: Record<string, IconType> = {
  React: FaReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  HTML5: FaHtml5,
  Redux: SiRedux,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'REST API': FaCode,
  JWT: FaKey,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Mongoose: SiMongoose,
  'Tailwind CSS': SiTailwindcss,
  SCSS: SiSass,
  Bootstrap: FaBootstrap,
  CSS3: FaCss3Alt,
  GSAP: SiGreensock,
  'Framer Motion': SiFramer,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'VS Code': VscVscode,
  Vercel: SiVercel,
  Netlify: SiNetlify,
};

const groupNotes: Record<string, string> = {
  Frontend: 'Interfaces, component systems and client-side state.',
  Backend: 'APIs, authentication and server logic built to stay maintainable.',
  Database: 'Schemas, queries and data models that keep the product honest.',
  Styling: 'Responsive systems in Tailwind, SCSS and hand-written CSS.',
  Motion: 'Scroll-driven stories and interaction with a purpose.',
  Tools: 'Version control, editor and deployment workflows I use daily.',
};

const groups = Object.entries(skills);
const technologyCount = new Set(groups.flatMap(([, items]) => items)).size;

export const SkillsStack = () => (
  <section id="skills" className="scroll-mt-24 pb-20 pt-28 md:pb-24 md:pt-32">
    <Container>
      <div className="grid gap-8 border-b border-border pb-8 md:grid-cols-12 md:items-end md:pb-10">
        <div className="md:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            Skills
          </p>
          <h1 className="mt-3 max-w-3xl text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-7xl">
            <Mask>Tools I build with.</Mask>
          </h1>
        </div>
        <p className="max-w-sm leading-relaxed text-font-muted md:col-span-4 md:pb-2">
          A working stack, not a checklist. These are the tools I reach for when
          a product has to ship.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
        <aside className="md:col-span-4">
          <div className="lg:sticky lg:top-28">
            <dl className="border-t border-border">
              <div className="flex items-baseline justify-between gap-4 border-b border-border py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
                  Technologies
                </dt>
                <dd className="text-sm text-font">{technologyCount}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-border py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
                  Areas
                </dt>
                <dd className="text-sm text-font">{groups.length}</dd>
              </div>
              <div className="border-b border-border py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
                  Core stack
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-font">
                  React, Next.js, Node.js, Express.js, MongoDB
                </dd>
              </div>
            </dl>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-font-muted">
              I prefer a small stack used well over a long list used once. Every
              tool here has shipped in a project.
            </p>

            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
            >
              See them in the work
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>

        <div className="md:col-span-8">
          {groups.map(([group, items], index) => (
            <section
              key={group}
              className="border-t border-border py-7 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-font-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                  {group}
                </h2>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-border"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
                  {items.length} tools
                </span>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-font-muted">
                {groupNotes[group]}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
                {items.map((item) => {
                  const Icon = skillIcons[item];

                  return (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 text-sm text-font"
                    >
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          className="size-4 shrink-0 text-primary"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="size-1 bg-primary"
                        />
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
