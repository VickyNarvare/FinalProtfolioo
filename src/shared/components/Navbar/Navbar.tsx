import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router';

import { FaGithub } from 'react-icons/fa6';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ============================================
  // SCROLL DETECTION
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-500
          ease-out
          ${scrolled ? 'px-4 pt-4 sm:px-6' : 'px-0 pt-0'}
        `}
      >
        <motion.div
          initial={false}
          animate={{
            maxWidth: scrolled ? 1280 : 1536,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-full"
        >
          {/* =================================================
              NAVBAR CONTAINER
          ================================================= */}
          <motion.div
            initial={false}
            animate={{
              height: scrolled ? 60 : 72,

              borderRadius: scrolled ? 18 : 0,

              backgroundColor: scrolled
                ? 'color-mix(in srgb, var(--color-background-card) 92%, transparent)'
                : 'color-mix(in srgb, var(--color-background) 72%, transparent)',

              borderColor: scrolled ? 'var(--color-border)' : 'transparent',

              boxShadow: scrolled
                ? '0 12px 32px color-mix(in srgb, var(--color-font) 12%, transparent)'
                : '0 0 0 rgba(0, 0, 0, 0)',
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              items-center
              justify-between
              border
              px-4
              sm:px-6
              backdrop-blur-xl
            "
          >
            {/* =================================================
                LEFT
            ================================================= */}
            <div className="flex items-center gap-6">
              <Logo />

              {/* Divider */}
              <div className="hidden h-5 w-px bg-border lg:block" />

              <NavLinks />
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}
            <div className="flex items-center gap-2">
              {/* Theme */}
              <ThemeToggle />
              {/* Github */}
              <a
                href="https://github.com/VickyNarvare"
                target="_blank"
                rel="noopener noreferrer"
                className="

                  hidden
                  h-9
                  items-center
                  rounded-lg
                  border
                  border-border
                  bg-background-card
                  px-3
                  text-sm
                  font-medium
                  text-font-muted
                  transition-all
                  duration-200
                  hover:border-border-primary
                  hover:bg-background-secondary
                  hover:text-font
                  md:flex
                  gap-1
                "
              >
                <FaGithub size={17} />
                GitHub
              </a>

              {/* Let's Talk */}
              <Link
                to="/contact"
                className="
                  hidden
                  h-9
                  items-center
                  rounded-lg
                  bg-primary
                  px-4
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-primary-dark
                  hover:shadow-md
                  sm:flex
                "
              >
                Let&apos;s Talk
              </Link>

              {/* Mobile */}
              <button
                onClick={() => setMobileOpen((previous) => !previous)}
                aria-label="Toggle menu"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  text-font-muted
                  transition-colors
                  hover:bg-background-secondary
                  hover:text-font
                  lg:hidden
                "
              >
                <HiOutlineMenu size={18} />
              </button>
            </div>
          </motion.div>

          {/* Mobile menu */}
          <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </motion.div>
      </header>
    </>
  );
};

export default Navbar;
