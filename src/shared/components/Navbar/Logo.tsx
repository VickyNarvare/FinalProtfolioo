import { PiCode } from "react-icons/pi";
const Logo = () => {
  return (
    <a
      href="#home"
      className="group flex items-center gap-2.5"
      aria-label="Vicky Narvare - Home"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-200 bg-purple-50 transition-all duration-300 group-hover:border-purple-300 group-hover:bg-purple-100">
        <PiCode
          size={19}
          strokeWidth={2}
          className="text-primary transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="hidden sm:block">
        <p className="text-sm font-semibold leading-none text-font">
          Vicky Narvare
        </p>

        <p className="mt-1 text-[11px] text-font-muted">Developer</p>
      </div>
    </a>
  );
};

export default Logo;
