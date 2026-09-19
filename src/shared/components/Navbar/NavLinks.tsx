import { motion } from 'motion/react';
import { NavLink } from 'react-router';
import { navigation } from './navigation';

interface NavLinksProps {
  activeSection: string;
}

const NavLinks = ({ activeSection }: NavLinksProps) => {
  return (
    <nav className="hidden items-center gap-5 lg:flex">
      {navigation.map((item) => {
        const isActive = activeSection === item.ref.slice(1);

        return (
          <NavLink key={item.ref} to={item.ref}>
            {/* Text */}
            <span
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-font-muted hover:text-font'
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
                  type: 'spring',
                  stiffness: 500,
                  damping: 35,
                }}
              />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavLinks;
