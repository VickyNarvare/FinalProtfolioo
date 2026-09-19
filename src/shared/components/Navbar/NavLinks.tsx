import { motion } from "motion/react";
import { navigation } from "./navigation";

interface NavLinksProps {
  activeSection: string;
}

const NavLinks = ({ activeSection }: NavLinksProps) => {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navigation.map((item) => {
        const isActive = activeSection === item.href.slice(1);

        return (
          <a
            key={item.href}
            href={item.href}
            className="relative rounded-lg px-3 py-2 text-sm font-medium"
          >
            {/* Text */}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? "text-primary" : "text-font-muted hover:text-font"
              }`}
            >
              {item.label}
            </span>

            {/* Smooth active indicator */}
            {isActive && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
};

export default NavLinks;
