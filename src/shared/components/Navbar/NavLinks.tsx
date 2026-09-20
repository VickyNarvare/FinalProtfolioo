import { Link, useLocation } from 'react-router';
import { navigation } from './Navigation';

const NavLinks = () => {
  const { pathname } = useLocation();

  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navigation.map((item, index) => {
        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(`${item.href}/`));

        return (
          <Link
            key={item.href}
            to={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`relative rounded-lg px-3 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-all duration-200 ${
              isActive
                ? 'bg-primary/10 text-primary'
                : 'text-font-muted hover:bg-background-secondary hover:text-font'
            }`}
          >
            <span className="mr-2 text-[10px] text-font-light">
              {String(index + 1).padStart(2, '0')}
            </span>
            {item.label}

            {isActive && (
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
