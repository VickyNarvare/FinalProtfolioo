import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useState } from 'react';
import { useLocation, useOutlet } from 'react-router';
import { PageScroll } from './PageScroll';

// Matches the order of the main navigation so moving forward swipes one way
// and going back swipes the other.
const routeOrder = ['/', '/about', '/projects', '/skills', '/contact'];

const routeIndex = (pathname: string) => {
  const index = routeOrder.findIndex(
    (path) =>
      pathname === path || (path !== '/' && pathname.startsWith(`${path}/`))
  );

  return index === -1 ? routeOrder.length : index;
};

const pageVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '12%' : '-12%',
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '-8%' : '8%',
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  }),
};

/**
 * Swaps the routed page for a horizontal swipe. `mode="wait"` lets the old
 * page slide away before the new one arrives, which keeps two full-height
 * pages from overlapping (and keeps the footer from jumping).
 */
export const PageTransition = () => {
  const { pathname, hash } = useLocation();
  const outlet = useOutlet();
  const reduceMotion = useReducedMotion();

  const currentIndex = routeIndex(pathname);
  const [lastRoute, setLastRoute] = useState({
    index: currentIndex,
    direction: 1,
  });

  // Adjusting state during render is the recommended way to react to a prop
  // change here: React re-renders immediately, before committing, so the
  // exit animation always gets the right direction.
  let direction = lastRoute.direction;

  if (lastRoute.index !== currentIndex) {
    direction = currentIndex > lastRoute.index ? 1 : -1;
    setLastRoute({ index: currentIndex, direction });
  }

  if (reduceMotion) {
    return (
      <>
        {outlet}
        <PageScroll pathname={pathname} hash={hash} />
      </>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={pathname}
        custom={direction}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {outlet}
        <PageScroll pathname={pathname} hash={hash} />
      </motion.div>
    </AnimatePresence>
  );
};
