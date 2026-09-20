import { AnimatePresence, MotionConfig } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Loading } from '../shared/components/Loading';
import Navbar from '../shared/components/Navbar/Navbar';
import { Footer } from './Footer';

// Show the intro once per browser session.
const alreadyLoaded = () => {
  try {
    return sessionStorage.getItem('loaded') === '1';
  } catch {
    return false;
  }
};

export const MainLayout = () => {
  const { pathname, hash } = useLocation();
  const [loading, setLoading] = useState(() => !alreadyLoaded());

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem('loaded', '1');
    } catch {
      /* storage unavailable, intro will just show again next visit */
    }
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
      {/* Page mounts after the intro so the hero's text reveal plays on screen, not behind the overlay. */}
      <main id="main">{!loading && <Outlet />}</main>
      <Footer />
    </MotionConfig>
  );
};
