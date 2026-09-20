import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn('mx-auto w-full max-w-350 px-5 md:px-10', className)}>
    {children}
  </div>
);
