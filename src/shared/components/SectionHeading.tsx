import { Mask } from './Mask';

export const SectionHeading = ({
  label,
  lines,
}: {
  label: string;
  lines: string[];
}) => (
  <div className="mb-12 md:mb-20">
    <p className="font-mono text-xs text-primary">// {label}</p>
    <h2 className="mt-4 max-w-5xl text-5xl font-extrabold tracking-tighter leading-[0.85] md:text-8xl">
      {lines.map((l, i) => (
        <Mask key={l} delay={i * 0.1}>
          {l}
        </Mask>
      ))}
    </h2>
  </div>
);
