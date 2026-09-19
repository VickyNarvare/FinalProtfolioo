import { AnimatePresence, motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { navigation } from "./navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
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
            className="absolute left-4 right-4 top-18 z-50 rounded-2xl border border-border bg-background-card p-3 shadow-xl lg:hidden"
          >
            <div className="mb-2 flex items-center justify-end px-2 py-2">
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-font-muted hover:bg-purple-light hover:text-font"
              >
                <RxCross2 size={20} />
              </button>
            </div>

            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-font-muted transition-colors hover:bg-purple-light hover:text-font"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="my-3 h-px bg-border" />

            <a
              href="https://github.com/VickyNarvare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-font-muted hover:bg-purple-light hover:text-font"
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
