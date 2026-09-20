import { Button } from '../../../shared/components/Button';
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
          <p className="max-w-sm text-xl text-font-muted">
            I'm available for freelance projects and full-time opportunities.
          </p>
          <dl className="space-y-4 font-mono text-sm">
            <div>
              <dt className="text-font-light">Email</dt>
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
              <dt className="text-font-light">Phone / WhatsApp</dt>
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
              <dt className="text-font-light">Location</dt>
              <dd>Indore, India</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-wrap content-start gap-4 md:col-span-7">
          <Button href={`mailto:${contact.email}`} variant="solid" magnetic>
            Email Me
          </Button>
          <Button href={contact.whatsapp} magnetic>
            WhatsApp
          </Button>
          <Button href={contact.github} magnetic>
            View GitHub
          </Button>
          <Button href={contact.linkedin} magnetic>
            LinkedIn
          </Button>
        </div>
      </div>
    </Container>
  </section>
);
