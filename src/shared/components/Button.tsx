import { Link } from 'react-router';
import { cn } from '../../lib/utils';
import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  variant?: 'solid' | 'outline';
  children: ReactNode;
}

export const Button = ({ href, variant = 'outline', children }: ButtonProps) => {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const className = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-[background-color,border-color,color,box-shadow] duration-200',
    variant === 'solid'
      ? 'bg-primary text-background hover:bg-primary-dark'
      : 'border border-border bg-background-card text-font hover:border-primary/50 hover:text-primary'
  );

  return external ? (
    <a
      href={href}
      className={className}
      {...(href.startsWith('http') && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {children}
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};
