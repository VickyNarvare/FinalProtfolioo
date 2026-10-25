import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';
import { Reveal } from '../../../shared/components/Reveal';
import { projects } from '../../projects/data/projects';
import { skills } from '../../skills/data/skills';

const stats = [
  { value: '1+', label: 'Years building' },
  { value: String(projects.length), label: 'Projects shipped' },
  { value: String(new Set(Object.values(skills).flat()).size), label: 'Technologies used' },
  { value: '24h', label: 'Typical reply' },
];

const details = [
  { label: 'Role', value: 'MERN Stack Developer' },
  { label: 'Based in', value: 'Indore, Madhya Pradesh' },
  { label: 'Education', value: 'MCA candidate, DAVV' },
  { label: 'Focus', value: 'Full-stack web applications' },
  { label: 'Availability', value: 'Freelance & full-time' },
];

export const AboutHero = () => (
  <section id="about" className="scroll-mt-24 pb-20 pt-28 md:pb-28 md:pt-32">
    <Container>
      <Reveal className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em]" y={12}>
        <p className="text-primary">About</p>
        <p className="flex items-center gap-2 text-font-muted">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse"
          />
          Open to new projects
        </p>
      </Reveal>

      <h1
        aria-label="About Vicky Narvare, MERN Stack Developer"
        className="mt-8 text-[15vw] font-medium leading-[0.82] tracking-[-0.02em] md:mt-10 md:text-[11vw]"
      >
        <Mask>About Vicky</Mask>
        <Mask delay={0.1} className="md:pl-[16vw]">
          Narvare.
        </Mask>
      </h1>

      <div className="mt-12 grid gap-10 border-t border-border pt-10 md:mt-16 md:grid-cols-12 md:gap-12">
        <Reveal as="div" className="space-y-5 md:col-span-7">
          <p className="text-xl font-semibold leading-relaxed tracking-tight text-font md:text-2xl">
            I&apos;m a MERN stack developer who enjoys the whole build — the
            interface people use, the API behind it and the database that keeps
            it honest.
          </p>
          <p className="max-w-2xl leading-relaxed text-font-muted md:text-lg">
            My work sits between design and engineering. I care about how a
            product feels, but I care just as much about how it holds up:
            accessible markup, sensible state, clean endpoints and pages that
            stay fast on a mid-range phone.
          </p>
          <p className="max-w-2xl leading-relaxed text-font-muted md:text-lg">
            I&apos;m currently completing an MCA at DAVV while building
            full-stack projects and training at Seriyans Coding School. If
            you&apos;re looking for someone who can take a feature from idea to
            deployment, we should talk.
          </p>
        </Reveal>

        <Reveal
          as="dl"
          delay={0.08}
          className="self-start border-t border-border md:col-span-5 md:border-t-0"
        >
          {details.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-3.5 text-sm"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
                {item.label}
              </dt>
              <dd className="text-font">{item.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal
        as="dl"
        className="mt-14 grid grid-cols-2 gap-px border-y border-border bg-border md:mt-20 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-background px-4 py-5">
            <dt className="text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              {stat.value}
            </dt>
            <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
              {stat.label}
            </dd>
          </div>
        ))}
      </Reveal>
    </Container>
  </section>
);
