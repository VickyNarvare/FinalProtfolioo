import { cn } from '../../lib/utils';
import { Mask } from './Mask';

const sizes = {
  sm: 'text-3xl leading-[0.95] md:text-4xl',
  md: 'text-4xl leading-[0.95] md:text-5xl',
  lg: 'text-5xl leading-[0.92] md:text-6xl',
  page: 'text-5xl leading-[0.9] md:text-7xl lg:text-8xl',
} as const;

export const SectionHeading = ({
  label,
  lines,
  as: Heading = 'h2',
  size = 'md',
  className,
}: {
  label: string;
  lines: string[];
  as?: 'h1' | 'h2';
  size?: keyof typeof sizes;
  className?: string;
}) => (
  <div className={cn('mb-10 md:mb-14', className)}>
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
      {label}
    </p>
    <Heading
      className={cn(
        'mt-3 max-w-4xl font-extrabold tracking-tighter',
        sizes[size]
      )}
    >
      {lines.map((line, index) => (
        <Mask key={line} delay={index * 0.06}>
          {line}
        </Mask>
      ))}
    </Heading>
  </div>
);
