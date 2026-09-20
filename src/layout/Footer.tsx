import { Link } from 'react-router';
import { Container } from '../shared/components/Container';
import { navigation } from '../shared/components/Navbar/navigation';

export const Footer = () => (
  <footer className="mt-24 border-t border-border py-12">
    <Container className="grid gap-10 md:grid-cols-3">
      <div>
        <p className="text-2xl font-extrabold tracking-tighter">
          Vicky Narvare
        </p>
        <p className="text-sm text-font-muted">Full Stack Developer</p>
        <p className="mt-4 font-mono text-xs text-font-light">Indore, India</p>
      </div>
      <nav
        aria-label="Footer"
        className="flex flex-wrap gap-6 text-sm text-font-muted md:justify-center"
      >
        {navigation.map((n) => (
          <Link key={n.href} to={n.href} className="hover:text-primary">
            {n.label}
          </Link>
        ))}
      </nav>
      <p className="font-mono text-xs text-font-light md:text-right">
        © 2026 Vicky Narvare. All rights reserved.
      </p>
    </Container>
  </footer>
);
