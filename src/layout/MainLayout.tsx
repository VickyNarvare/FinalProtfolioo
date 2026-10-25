import { MotionConfig } from 'motion/react';
import { useLocation } from 'react-router';
import Navbar from '../shared/components/Navbar/Navbar';
import { PageTransition } from '../shared/components/PageTransition';
import { Seo } from '../shared/components/Seo';
import { Footer } from './Footer';

export const MainLayout = () => {
  const { pathname } = useLocation();

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
