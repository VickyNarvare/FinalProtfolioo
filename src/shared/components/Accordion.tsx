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
      {items.map((item, index) => {
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;
        const expanded = open === index;

        return (
          <div key={item.title} className="border-b border-border">
            <button
              id={buttonId}
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? -1 : index)}
              className="group flex w-full items-baseline gap-4 py-5 text-left"
            >
              {numbered && (
                <span className="font-mono text-[10px] text-font-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}
              <span className="flex-1 text-2xl font-medium tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                {item.title}
              </span>
              <span
                className="font-mono text-lg text-primary"
                aria-hidden="true"
              >
                {expanded ? '−' : '+'}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!expanded}
              className={cn(
                'grid transition-[grid-template-rows] duration-300',
                expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="max-w-xl space-y-3 pb-6 text-font-muted md:pl-10">
                  <p>{item.desc}</p>
                  {item.detail && (
                    <p className="font-mono text-[11px] leading-relaxed text-font">
                      {item.detail}
                    </p>
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
