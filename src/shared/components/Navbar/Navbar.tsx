import { useState } from "react";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-350 items-center justify-between px-5 md:px-10">
          <Link to="/" onClick={() => setOpen(false)} className="font-extrabold tracking-tight">Vicky Narvare</Link>
          <NavLinks />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="min-h-11 font-mono text-xs lg:hidden" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
              {open ? "close" : "menu"}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
