import { useLayoutEffect, useRef } from 'react';

/**
 * Restores the scroll position for a page as soon as that page mounts. Kept
 * inside the transition wrapper so the outgoing page stays where the visitor
 * left it while it slides away.
 */
export const PageScroll = ({
  pathname,
  hash,
}: {
  pathname: string;
  hash: string;
}) => {
  const previousPathname = useRef<string | null>(null);

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

  return null;
};
