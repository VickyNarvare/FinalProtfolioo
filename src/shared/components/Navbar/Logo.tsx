import { PiCode } from 'react-icons/pi';
import { Link } from 'react-router';
const Logo = () => {
  return (
    <Link
      to="/"
      className="group flex cursor-pointer items-center gap-3"
      aria-label="Vicky Narvare - Home"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background-card shadow-sm transition-all duration-300 group-hover:border-primary group-hover:bg-background-secondary">
        <PiCode
          size={19}
          strokeWidth={2}
          className="text-primary transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
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
