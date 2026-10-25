import { Link } from 'react-router';
import { Container } from '../shared/components/Container';
import { navigation } from '../shared/components/Navbar/Navigation';
import { contact } from '../shared/data/site';

const socials = [
  { label: 'GitHub', href: contact.github },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'WhatsApp', href: contact.whatsapp },
];

export const Footer = () => (
  <footer className="border-t border-border py-12">
    <Container>
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="text-2xl font-extrabold tracking-tighter">
            Vicky Narvare
          </p>
          <p className="mt-1 text-sm text-font-muted">
            MERN stack developer · Indore, India
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-font-light">
            Available for freelance &amp; full-time work
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap content-start gap-x-6 gap-y-3 md:col-span-4 md:justify-center"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-font-muted transition-colors hover:text-font"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:col-span-4 md:text-right">
          <a
            href={`mailto:${contact.email}`}
            className="inline-block break-all text-base font-semibold text-font transition-colors hover:text-primary-dark md:text-lg"
          >
            {contact.email}
          </a>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-font-muted md:justify-end">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-font"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
        <p>© 2026 Vicky Narvare</p>
        <p>Built with React, TypeScript &amp; Tailwind CSS</p>
        <a
          href="#main"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-font"
        >
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </Container>
  </footer>
);
