import type { ReactNode } from 'react';

export const Badge = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-font-muted">
    {children}
  </span>
);
