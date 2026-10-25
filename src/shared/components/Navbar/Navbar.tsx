import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router';

import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

const HIDE_AFTER = 96;
const DIRECTION_THRESHOLD = 6;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = useCallback(() => {
    setMobileOpen(false);
    setHidden(false);
  }, []);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);
  const reduceMotion = useReducedMotion();

  // Thin reading progress line along the bottom of the bar.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      if (mobileOpen || y < HIDE_AFTER) {
        setHidden(false);
      } else {
        const delta = y - lastScrollY.current;
        if (delta > DIRECTION_THRESHOLD) setHidden(true);
        else if (delta < -DIRECTION_THRESHOLD) setHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  const hideBar = hidden && !mobileOpen && !reduceMotion;

  return (
    <motion.header
      initial={false}
      animate={{ y: hideBar ? '-100%' : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onFocusCapture={() => setHidden(false)}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`relative border-b transition-[background-color,border-color] duration-300 ${
          mobileOpen
            ? 'border-border bg-background'
            : scrolled
              ? 'border-border bg-background'
              : 'border-transparent bg-background/60'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-350 items-center justify-between gap-4 px-5 md:px-10">
          {/* Left */}
          <div className="flex min-w-0 items-center gap-3 lg:gap-5">
            <Logo />
            <div className="hidden h-5 w-px bg-border xl:block" />
            <NavLinks />
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            <a
              href="https://github.com/VickyNarvare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hidden h-9 items-center gap-2 rounded-lg border border-border bg-background-card px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-font-muted transition-colors duration-200 hover:border-border-primary hover:text-font md:flex"
            >
              <FaGithub size={15} />
              GitHub
            </a>

            <Link
              to="/contact"
              className="group hidden h-9 items-center gap-1.5 rounded-lg bg-primary-dark px-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-background transition-colors duration-200 hover:opacity-90 sm:flex"
            >
              Let&apos;s talk
              <FiArrowUpRight
                aria-hidden="true"
                size={13}
                className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
              />
            </Link>

            <button
              ref={menuButtonRef}
              onClick={() => {
                setMobileOpen((previous) => !previous);
                setHidden(false);
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-font-muted transition-colors duration-200 hover:bg-background-secondary hover:text-font lg:hidden"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {mobileOpen ? (
                    <RxCross2 size={18} />
                  ) : (
                    <HiOutlineMenu size={18} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <motion.span
          aria-hidden="true"
          style={{ scaleX: progress }}
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-primary transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <MobileMenu
          open={mobileOpen}
          onClose={closeMenu}
          triggerRef={menuButtonRef}
        />
      </div>
    </motion.header>
  );
};

export default Navbar;
