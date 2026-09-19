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
            className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "text-primary"
                : "text-font-muted hover:bg-purple-light hover:text-font"
            }`}
          >
            {item.label}

            {isActive && (
              <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
            )}
          </a>
        );
      })}
    </nav>
  );
};

export default NavLinks;
