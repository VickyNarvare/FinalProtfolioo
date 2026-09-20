import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { Container } from '../../../shared/components/Container';
import { SectionHeading } from '../../../shared/components/SectionHeading';
import { contact } from '../../../shared/data/site';

export const ContactCTA = () => (
  <section id="contact" className="scroll-mt-24 py-24 md:py-32">
    <Container>
      <SectionHeading
        label="contact"
        lines={['Have a project in mind?', "Let's build it."]}
      />
      <div className="grid gap-10 md:grid-cols-12">
        <div className="space-y-6 md:col-span-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary">
            <span className="size-2 rounded-full bg-primary" />
            Available for new work
          </div>
          <p className="max-w-sm text-xl leading-relaxed text-font-muted">
            I&apos;m available for freelance projects and full-time
            opportunities. Tell me what you&apos;re building and I&apos;ll get
            back to you soon.
          </p>
          <dl className="space-y-4 font-mono text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-font-light">
                Email
              </dt>
              <dd>
                <a
                  className="hover:text-primary"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-font-light">
                Phone / WhatsApp
              </dt>
              <dd>
                <a
                  className="hover:text-primary"
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-font-light">
                Location
              </dt>
              <dd>Indore, India</dd>
            </div>
            <div className="border-t border-border pt-4 text-xs text-font-light">
              Typical response time: within 24 hours
            </div>
          </dl>
        </div>
        <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:col-span-7 md:grid-cols-12 md:grid-rows-2">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="group flex min-h-32 items-center justify-center gap-2 rounded-[1.75rem] border-2 border-font bg-font p-4 text-lg font-extrabold tracking-tight text-background shadow-sm transition-[background-color,color,transform,box-shadow] duration-250 hover:-translate-y-1 hover:bg-primary hover:shadow-xl focus-visible:-translate-y-1 focus-visible:bg-primary active:translate-y-0 sm:min-h-36 sm:gap-3 sm:text-xl md:min-h-48 md:col-span-7"
          >
            <FaGithub aria-hidden="true" className="text-2xl" />
            GitHub
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <FiArrowUpRight />
            </span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="group flex min-h-32 items-center justify-center gap-2 rounded-[1.75rem] border-2 border-primary bg-primary p-4 text-lg font-extrabold tracking-tight text-background shadow-sm transition-[background-color,color,transform,box-shadow] duration-250 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl focus-visible:-translate-y-1 focus-visible:bg-primary-dark active:translate-y-0 sm:min-h-36 sm:gap-3 sm:text-xl md:min-h-48 md:col-span-5"
          >
            <FaLinkedinIn aria-hidden="true" className="text-2xl" />
            LinkedIn
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <FiArrowUpRight />
            </span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send an email"
            className="group flex min-h-32 items-center justify-center gap-2 rounded-[1.75rem] border-2 border-border bg-background-secondary p-4 text-lg font-extrabold tracking-tight text-font shadow-sm transition-[background-color,color,transform,box-shadow] duration-250 hover:-translate-y-1 hover:bg-font hover:text-background hover:shadow-xl focus-visible:-translate-y-1 focus-visible:bg-font focus-visible:text-background active:translate-y-0 sm:min-h-36 sm:gap-3 sm:text-xl md:min-h-48 md:col-span-5"
          >
            <FiMail aria-hidden="true" className="text-2xl" />
            Email
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <FiArrowUpRight />
            </span>
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Message on WhatsApp"
            className="group flex min-h-32 items-center justify-center gap-2 rounded-[1.75rem] border-2 border-primary-dark bg-primary-dark p-4 text-lg font-extrabold tracking-tight text-background shadow-sm transition-[background-color,color,transform,box-shadow] duration-250 hover:-translate-y-1 hover:bg-font hover:shadow-xl focus-visible:-translate-y-1 focus-visible:bg-font active:translate-y-0 sm:min-h-36 sm:gap-3 sm:text-xl md:min-h-48 md:col-span-7"
          >
            <FaWhatsapp aria-hidden="true" className="text-2xl" />
            WhatsApp
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </Container>
  </section>
);
