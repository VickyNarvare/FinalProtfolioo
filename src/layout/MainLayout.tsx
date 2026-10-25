import { MotionConfig } from 'motion/react';
import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../shared/components/Navbar/Navbar';
import { PageTransition } from '../shared/components/PageTransition';
import { Seo } from '../shared/components/Seo';
import { Footer } from './Footer';

export const MainLayout = () => {
  const { pathname, hash } = useLocation();
  // `null` on the first commit so the initial route also jumps instantly.
  const previousPathname = useRef<string | null>(null);

  // Route changes jump instantly. Smooth scrolling is only for in-page links.
  useLayoutEffect(() => {
    const pathChanged = previousPathname.current !== pathname;
    previousPathname.current = pathname;

    const target = hash ? document.getElementById(hash.slice(1)) : null;

    if (target) {
      target.scrollIntoView({
        behavior: pathChanged ? 'instant' : 'smooth',
        block: 'start',
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded focus:bg-primary focus:p-3 focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <Seo pathname={pathname} />
      <main id="main" tabIndex={-1}>
        <PageTransition />
      </main>
      <Footer />
    </MotionConfig>
  );
};
