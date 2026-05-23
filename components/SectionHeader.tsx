import { Reveal } from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
};

export function SectionHeader({ index, label, title, intro }: Props) {
  return (
    <div className="mb-12 sm:mb-16">
      <Reveal>
        <div className="flex items-center gap-3 text-faint">
          <span className="eyebrow">{index}</span>
          <span className="h-px w-10 bg-line" />
          <span className="eyebrow text-soft">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-5 max-w-3xl text-[clamp(2rem,5.2vw,3.6rem)] font-semibold text-ink">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-soft">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
