import { Link } from 'react-router';
const Logo = () => {
  return (
    <Link
      to="/"
      className="group flex cursor-pointer items-center gap-3"
      aria-label="Vicky Narvare - Home"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background-card shadow-sm transition-all duration-300 group-hover:border-primary group-hover:bg-background-secondary">
        <span className="text-sm font-black tracking-[-0.12em] text-font">
          V<span className="text-primary">N</span>
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 right-1.5 size-1 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"
        />
      </div>

      <div className="hidden sm:block">
        <p className="text-[0.95rem] font-bold leading-none tracking-tight text-font">
          Vicky Narvare
        </p>

        <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-font-light">
          Developer
        </p>
      </div>
    </Link>
  );
};

export default Logo;
