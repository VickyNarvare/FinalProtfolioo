import { AnimatePresence, motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { Link, useLocation } from 'react-router';
import { navigation } from './Navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const { pathname } = useLocation();

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
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-18 z-50 rounded-2xl border border-border bg-background-card p-3 text-font shadow-xl dark:bg-background-card lg:hidden"
          >
            <div className="mb-2 flex items-center justify-end px-2 py-2">
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-font-muted hover:bg-background-secondary hover:text-font dark:text-font-muted"
              >
                <RxCross2 size={20} />
              </button>
            </div>

            <div className="space-y-1">
              {navigation.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-xl border-l-2 px-3 py-2.5 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${
                      isActive
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-transparent text-font-muted hover:bg-background-secondary hover:text-font'
                    }`}
                  >
                    <span className="mr-2 text-[10px] text-font-light">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="my-3 h-px bg-border" />

            <a
              href="https://github.com/VickyNarvare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-font-muted hover:bg-background-secondary hover:text-font dark:text-font-muted"
            >
              <FaGithub size={17} />
              GitHub
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
