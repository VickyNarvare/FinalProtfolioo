import { AnimatePresence, MotionConfig } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AvailabilityStatus } from '../shared/components/AvailabilityStatus';
import { Loading } from '../shared/components/Loading';
import Navbar from '../shared/components/Navbar/Navbar';
import { Seo } from '../shared/components/Seo';
import { Footer } from './Footer';

export const MainLayout = () => {
  const { pathname, hash } = useLocation();
  const [loading, setLoading] = useState(true);

  const finish = useCallback(() => {
    setLoading(false);
  }, []);

  // Scroll to #section after navigation, or to the top on a new page.
  useEffect(() => {
    if (loading) return;
    const el = hash ? document.getElementById(hash.slice(1)) : null;
    if (el) setTimeout(() => el.scrollIntoView(), 50);
    else window.scrollTo(0, 0);
  }, [pathname, hash, loading]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && <Loading onDone={finish} />}
      </AnimatePresence>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded focus:bg-primary focus:p-3 focus:text-background"
      >
        Skip to content
      </a>
      <Navbar />
      <Seo pathname={pathname} />
      {/* Page mounts after the intro so the hero's text reveal plays on screen, not behind the overlay. */}
      <main id="main">
        {!loading && (
          <>
            <AvailabilityStatus />
            <Outlet />
          </>
        )}
      </main>
      <Footer />
    </MotionConfig>
  );
};
