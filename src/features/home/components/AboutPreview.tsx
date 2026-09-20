import { Container } from '../../../shared/components/Container';
import { Counter } from '../../../shared/components/Counter';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { journey } from '../../about/data/journey';

export const AboutPreview = () => (
  <section id="about" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading label="about" lines={['From learning', 'to building.']} />
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="max-w-md text-lg text-font-muted">
            I started with the basics of web development and kept building until
            the projects were real: deployed, live and used.
          </p>
          <dl className="mt-10 flex gap-12">
            <div>
              <dt className="font-mono text-xs text-font-light">
                Years of development
              </dt>
              <dd className="text-7xl font-extrabold tracking-tighter">
                <Counter to={2} suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-font-light">
                Live projects
              </dt>
              <dd className="text-7xl font-extrabold tracking-tighter">
                <Counter to={8} />
              </dd>
            </div>
          </dl>
        </div>
        <ol className="border-l border-border md:col-span-7">
          {journey.map((j) => (
            <li key={j} className="relative py-6 pl-8 text-xl md:text-2xl">
              <span className="absolute -left-1.25 top-9 size-2 rounded-full bg-primary" />
              {j}
            </li>
          ))}
        </ol>
      </div>
    </Container>
  </section>
);
