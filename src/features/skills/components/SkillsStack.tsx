import { useState } from 'react';
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
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { skills } from '../data/skills';

const skillIcons: Record<string, IconType> = {
  React: FaReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  HTML5: FaHtml5,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'REST API': FaCode,
  JWT: FaKey,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  'Tailwind CSS': SiTailwindcss,
  SCSS: SiSass,
  Bootstrap: FaBootstrap,
  CSS3: FaCss3Alt,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'VS Code': VscVscode,
  Vercel: SiVercel,
  Netlify: SiNetlify,
};

const SkillItem = ({ name, Icon }: { name: string; Icon?: IconType }) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  if (!Icon) return <li>{name}</li>;

  return (
    <li
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setCursor({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
        });
      }}
      className="group relative cursor-default text-4xl font-extrabold tracking-tighter transition-all duration-300 hover:-translate-y-1 hover:tracking-normal hover:text-primary md:text-6xl"
    >
      {name}
      <span
        className="pointer-events-none absolute z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background-card text-primary opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:size-9"
        style={{
          left: cursor.x + 10,
          top: cursor.y,
        }}
      >
        <Icon aria-hidden="true" className="size-4 md:size-5" />
      </span>
    </li>
  );
};

export const SkillsStack = () => (
  <section id="skills" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading label="skills" lines={['The stack', 'I ship with.']} />
      <div className="space-y-10">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="grid gap-3 border-t border-border pt-6 md:grid-cols-12"
          >
            <p className="font-mono text-xs text-font-light md:col-span-2">
              {group}
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 md:col-span-10">
              {items.map((t) => (
                <SkillItem key={t} name={t} Icon={skillIcons[t]} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
