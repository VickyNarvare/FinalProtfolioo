import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { Container } from '../../../shared/components/Container';
import { Mask } from '../../../shared/components/Mask';
import { contact } from '../../../shared/data/site';

const details = [
  { label: 'Based in', value: 'Indore, India — working worldwide' },
  { label: 'Availability', value: 'Freelance & full-time' },
  { label: 'Response', value: 'Within 24 hours' },
  {
    label: 'Best for',
    value: 'Full-stack apps, business websites, frontend & API work',
  },
];

type Channel = {
  title: string;
  subtitle: string;
  href: string;
  icon: IconType;
};

const channels: Channel[] = [
  {
    title: 'WhatsApp',
    subtitle: 'Fastest for quick questions',
    href: contact.whatsapp,
    icon: FaWhatsapp,
  },
  {
    title: 'LinkedIn',
    subtitle: 'Connect professionally',
    href: contact.linkedin,
    icon: FaLinkedinIn,
  },
  {
    title: 'GitHub',
    subtitle: 'Explore my code',
    href: contact.github,
    icon: FaGithub,
  },
];

export const ContactHero = () => (
  <section id="contact" className="scroll-mt-24 pb-20 pt-28 md:pb-24 md:pt-32">
    <Container>
      <div className="grid gap-8 border-b border-border pb-8 md:grid-cols-12 md:items-end md:pb-10">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <h1 className="mt-3 text-[clamp(3.5rem,14vw,10rem)] font-medium leading-[0.82] tracking-[-0.02em]">
            <Mask>Let&apos;s talk.</Mask>
          </h1>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-font-muted md:col-span-5 md:pb-3">
          Tell me what you are building. I reply with clear next steps within 24
          hours.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="min-w-0 md:col-span-5">
          <dl className="border-t border-border">
            {details.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-border py-3.5 text-sm"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
                  {item.label}
                </dt>
                <dd className="text-font">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-font-muted">
            I read every message myself. A short brief is enough to start the
            conversation.
          </p>
        </div>

        <div className="min-w-0 md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
            Start with email
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="group mt-3 flex items-baseline justify-between gap-4 border-b border-border pb-5"
          >
            <span className="min-w-0 text-lg font-medium tracking-tight transition-colors [overflow-wrap:anywhere] group-hover:text-primary sm:text-2xl md:text-3xl">
              {contact.email}
            </span>
            <FiArrowUpRight
              aria-hidden="true"
              className="shrink-0 text-font-light transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            />
          </a>
          <p className="mt-3 text-sm text-font-muted">
            The most reliable way to reach me. Include the goal, scope and any
            deadline you have in mind.
          </p>

          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
            Elsewhere
          </p>
          <div className="mt-2 border-t border-border">
            {channels.map(({ title, subtitle, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border-b border-border py-4"
              >
                <Icon
                  aria-hidden="true"
                  className="text-lg text-font-light transition-colors group-hover:text-primary"
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-font transition-colors group-hover:text-primary">
                    {title}
                  </span>
                  <span className="block text-sm text-font-muted">
                    {subtitle}
                  </span>
                </span>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 text-font-light transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>
            ))}
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-font-muted transition-colors hover:text-primary"
          >
            <FiMail aria-hidden="true" size={14} />
            Email me directly
          </a>
        </div>
      </div>
    </Container>
  </section>
);
