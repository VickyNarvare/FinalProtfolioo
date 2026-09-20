import { useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

export const TypingText = ({ text }: { text: string }) => {
  const reducedMotion = useReducedMotion();
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    if (reducedMotion) return;

    let position = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting && position < text.length) position += 1;
      else if (deleting && position > 0) position -= 1;
      else if (position === text.length) {
        deleting = true;
        timeout = setTimeout(tick, 1200);
        return;
      } else {
        deleting = false;
        timeout = setTimeout(tick, 350);
        return;
      }

      setVisibleText(text.slice(0, position));
      timeout = setTimeout(tick, deleting ? 55 : 90);
    };

    timeout = setTimeout(tick, 250);
    return () => clearTimeout(timeout);
  }, [reducedMotion, text]);

  return (
    <span className="inline-flex items-baseline">
      {reducedMotion ? text : visibleText}
      {!reducedMotion && (
        <span className="ml-0.5 animate-pulse text-primary" aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
};
