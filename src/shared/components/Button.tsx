import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "../../lib/utils";

interface ButtonProps { href: string; variant?: "solid" | "outline"; magnetic?: boolean; children: ReactNode }

export const Button = ({ href, variant = "outline", magnetic = false, children }: ButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const external = /^(https?:|mailto:|tel:)/.test(href);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!magnetic || !el || matchMedia("(pointer:coarse),(prefers-reduced-motion:reduce)").matches) return;
    const b = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.25}px,${(e.clientY - b.top - b.height / 2) * 0.25}px)`;
  };
  const props = {
    onMouseMove: move,
    onMouseLeave: () => { if (ref.current) ref.current.style.transform = ""; },
    className: cn(
      "inline-flex min-h-11 items-center rounded-full px-6 py-3 text-sm font-semibold transition-[background,color,transform] duration-300",
      variant === "solid" ? "bg-primary text-background hover:bg-font" : "border border-font/30 text-font hover:bg-font hover:text-background",
    ),
  };

  return external ? (
    <a ref={ref} href={href} {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })} {...props}>{children}</a>
  ) : (
    <Link ref={ref} to={href} {...props}>{children}</Link>
  );
};
