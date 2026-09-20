import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { services } from '../../../shared/data/site';

export const Services = () => (
  <section id="services" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading label="services" lines={['What I offer.']} />
      <div className="border-t border-border">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-background-secondary md:grid-cols-12 md:px-4"
          >
            <span className="font-mono text-xs text-font-light md:col-span-1">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-3xl font-extrabold tracking-tighter transition-transform duration-300 group-hover:translate-x-2 md:col-span-5">
              {s.title}
            </h3>
            <p className="text-font-muted md:col-span-3">{s.desc}</p>
            <ul className="flex flex-wrap content-start gap-x-3 font-mono text-xs text-primary md:col-span-3">
              {s.tech?.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
