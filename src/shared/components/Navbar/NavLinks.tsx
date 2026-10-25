import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { navigation } from './Navigation';

const NavLinks = () => {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
      {navigation.map((item, index) => {
        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(`${item.href}/`));

        return (
          <Link
            key={item.href}
            to={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`relative flex items-center gap-2 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 ${
              isActive ? 'text-font' : 'text-font-muted hover:text-font'
            }`}
          >
            <span
              className={`text-[10px] transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-font-light'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{item.label}</span>

            {isActive && (
              <motion.span
                layoutId="nav-active"
                initial={false}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                className="absolute inset-x-3 bottom-0 h-px bg-primary"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
