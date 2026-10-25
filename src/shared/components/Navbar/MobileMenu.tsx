import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link, useLocation } from 'react-router';
import { contact } from '../../../shared/data/site';
import { navigation } from './Navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

const socials = [
  { label: 'GitHub', href: contact.github },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'WhatsApp', href: contact.whatsapp },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const MobileMenu = ({ open, onClose, triggerRef }: MobileMenuProps) => {
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLElement>(null);
  const previousPathname = useRef(pathname);

  // Close when the route actually changes — not on mount or StrictMode's
  // double-invoked effects.
  useEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
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

    const getFocusable = () => {
      const panelItems = Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        ) ?? []
      );
      const trigger = triggerRef.current;

      // Include the header close button so keyboard users can reach it too.
      // It sits before the panel in the DOM, so it leads the trap order.
      return trigger ? [trigger, ...panelItems] : panelItems;
    };

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
    const main = document.getElementById('main');
    const footer = document.querySelector('footer');
    const mainWasInert = main?.inert ?? false;
    const footerWasInert = footer?.inert ?? false;

    document.body.style.overflow = 'hidden';
    if (main) main.inert = true;
    if (footer) footer.inert = true;
    window.addEventListener('keydown', handleKeyDown);
    const focusable = getFocusable();
    const initialFocus = focusable.find(
      (element) => element !== triggerRef.current
    );
    (initialFocus ?? focusable[0])?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = originalOverflow;
      if (main) main.inert = mainWasInert;
      if (footer) footer.inert = footerWasInert;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          ref={panelRef}
          id="mobile-menu"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-16 z-40 flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto overscroll-contain bg-background text-font lg:hidden"
        >
          <div className="mx-auto flex min-h-full w-full max-w-350 flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 md:px-10 md:pt-10">
            <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Menu
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-font-light">
                {String(navigation.length).padStart(2, '0')} sections
              </p>
            </div>

            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="flex-1"
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
                      className="group flex items-center justify-between gap-5 border-b border-border py-4 md:py-5"
                    >
                      <span className="flex min-w-0 items-baseline gap-4 md:gap-6">
                        <span
                          className={`font-mono text-[10px] ${
                            isActive ? 'text-primary' : 'text-font-light'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`font-heading text-[clamp(2.25rem,10vw,3.75rem)] leading-[0.95] tracking-[-0.02em] transition-colors duration-200 ${
                            isActive
                              ? 'text-primary'
                              : 'text-font group-hover:text-primary'
                          }`}
                        >
                          {item.label}
                        </span>
                      </span>

                      <span className="flex shrink-0 items-center gap-2">
                        {isActive && (
                          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
                            <span
                              className="size-1.5 bg-primary"
                              aria-hidden="true"
                            />
                            Current
                          </span>
                        )}
                        <FiArrowUpRight
                          aria-hidden="true"
                          size={18}
                          className={`transition-[transform,color] duration-200 ${
                            isActive
                              ? 'text-primary'
                              : 'text-font-light group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary'
                          }`}
                        />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="mt-8 border-t border-border pt-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-font-light">
                Start a conversation
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block break-all font-heading text-2xl leading-tight tracking-[-0.02em] text-font transition-colors hover:text-primary md:text-3xl"
              >
                {contact.email}
              </a>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-font-muted">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-font"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={onClose}
                className="mt-5 flex min-h-12 items-center justify-between rounded-lg bg-primary px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-background transition-colors duration-200 hover:bg-primary-dark"
              >
                Let&apos;s talk
                <FiArrowUpRight aria-hidden="true" size={15} />
              </Link>

              <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.14em] text-font-light">
                <span>Indore, India</span>
                <span className="flex items-center gap-2">
                  <span className="size-1.5 bg-primary" aria-hidden="true" />
                  Available for work
                </span>
              </div>
            </motion.div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
