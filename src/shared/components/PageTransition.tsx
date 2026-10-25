import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router';

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
    x: direction > 0 ? '9%' : '-9%',
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '-6%' : '6%',
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  }),
};

/**
 * Swaps the routed page for a horizontal swipe. `mode="wait"` lets the old
 * page slide away before the new one arrives, which keeps two full-height
 * pages from overlapping (and keeps the footer from jumping).
 */
export const PageTransition = () => {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  const reduceMotion = useReducedMotion();

  const currentIndex = routeIndex(pathname);
  const previousIndex = useRef(currentIndex);
  const direction = currentIndex >= previousIndex.current ? 1 : -1;

  useEffect(() => {
    previousIndex.current = currentIndex;
  }, [currentIndex]);

  if (reduceMotion) {
    return outlet;
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
      </motion.div>
    </AnimatePresence>
  );
};
