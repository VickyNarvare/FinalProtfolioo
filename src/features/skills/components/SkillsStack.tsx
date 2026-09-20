import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { skills } from '../data/skills';

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
                <li
                  key={t}
                  className="cursor-default text-4xl font-extrabold tracking-tighter transition-all duration-300 hover:-translate-y-1 hover:tracking-normal hover:text-primary md:text-6xl"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
