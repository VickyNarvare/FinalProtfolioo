import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router';
import { navigation } from './Navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.02 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
};

const MobileMenu = ({ open, onClose, triggerRef }: MobileMenuProps) => {
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLElement>(null);

  // Close when the route changes.
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // A menu opened on a phone should not survive a resize to desktop — that
  // would also leave the body scroll locked.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)');
    const handleChange = () => {
      if (desktop.matches) onClose();
    };

    desktop.addEventListener('change', handleChange);
    return () => desktop.removeEventListener('change', handleChange);
  }, [onClose]);

  // Escape closes the menu, Tab stays inside it, and the page behind it stays
  // put while open.
  useEffect(() => {
    if (!open) return;

    const getFocusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        ) ?? []
      );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        triggerRef.current?.focus();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const items = getFocusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    getFocusable()[0]?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/30 lg:hidden"
          />

          {/* Menu */}
          <motion.nav
            ref={panelRef}
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full z-50 border-b border-border bg-background px-5 pb-5 pt-1 text-font md:px-10 lg:hidden"
          >
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="space-y-0.5"
            >
              {navigation.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(`${item.href}/`));

                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      aria-current={isActive ? 'page' : undefined}
                      className={`flex items-center gap-3 border-b border-border px-1 py-3.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors duration-200 ${
                        isActive
                          ? 'text-font'
                          : 'text-font-muted hover:text-font'
                      }`}
                    >
                      <span
                        className={`text-[10px] ${
                          isActive ? 'text-primary' : 'text-font-light'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://github.com/VickyNarvare"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border text-font-muted transition-colors duration-200 hover:border-border-primary hover:text-font"
              >
                <FaGithub size={17} />
              </a>

              <Link
                to="/contact"
                onClick={onClose}
                className="flex h-11 flex-1 items-center justify-between rounded-lg bg-primary-dark px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-background transition-opacity duration-300 hover:opacity-90"
              >
                Let&apos;s talk
                <FiArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
