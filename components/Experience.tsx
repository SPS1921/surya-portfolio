import { timeline } from "@/lib/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-shell px-5 pt-28 sm:px-8 sm:pt-36">
      <SectionHeader
        index="05"
        label="Trajectory"
        title={
          <>
            From sales floor to{" "}
            <span className="serif font-normal italic text-signal">founder&apos;s office.</span>
          </>
        }
        intro="A deliberately compounding path — each step adding ownership, systems and scope."
      />

      <ol className="relative border-l border-line pl-8 sm:pl-10">
        {timeline.map((step, i) => (
          <Reveal as="li" key={step.role} delay={i * 0.08} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] grid h-5 w-5 place-items-center rounded-full border border-line bg-paper sm:-left-[49px]">
              <span className="h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="eyebrow text-faint">{step.label}</span>
            <h3 className="display mt-2 text-[clamp(1.3rem,3vw,1.8rem)] font-medium text-ink">
              {step.role}
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-soft">{step.detail}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
