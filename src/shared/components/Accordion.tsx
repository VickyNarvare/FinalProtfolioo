import { useState } from 'react';
import { cn } from '../../lib/utils';
import type { Item } from '../../types/common';

export const Accordion = ({
  items,
  numbered = false,
}: {
  items: Item[];
  numbered?: boolean;
}) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t border-border">
      {items.map((it, i) => {
        const panelId = `accordion-panel-${i}`;
        const buttonId = `accordion-button-${i}`;

        return (
          <div key={it.title} className="border-b border-border">
            <button
              id={buttonId}
              aria-expanded={open === i}
              aria-controls={panelId}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="group flex w-full items-baseline gap-4 py-6 text-left"
            >
              {numbered && (
                <span className="font-mono text-xs text-font-light">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
              <span className="flex-1 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                {it.title}
              </span>
              <span className="font-mono text-primary" aria-hidden="true">
                {open === i ? '−' : '+'}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows] duration-500',
                open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="max-w-xl space-y-3 pb-6 text-font-muted md:pl-10">
                  <p>{it.desc}</p>
                  {it.detail && (
                    <p className="font-mono text-xs text-font">{it.detail}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
