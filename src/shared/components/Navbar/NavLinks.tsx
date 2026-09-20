import { Link } from "react-router";
import { navigation } from "./navigation";

const NavLinks = () => (
  <nav aria-label="Primary" className="hidden items-center gap-8 text-sm lg:flex">
    {navigation.map((item) => (
      <Link key={item.href} to={item.href} className="text-font-muted transition-colors hover:text-primary">{item.label}</Link>
    ))}
  </nav>
);

export default NavLinks;
