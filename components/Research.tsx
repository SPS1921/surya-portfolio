import { researchExposure, industries } from "@/lib/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const totalMethods = researchExposure.reduce((sum, c) => sum + c.items.length, 0);

export function Research() {
  return (
    <section id="research" className="bg-paperdeep py-28 sm:py-36">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeader
          index="03"
          label="Research & Insight"
          title={
            <>
              A full-spectrum{" "}
              <span className="serif font-normal italic text-signal">research operator.</span>
            </>
          }
          intro="Hands-on coordination across quant, qual, UX and retail — the operating layer behind insight that actually ships."
        />

        {/* Summary infographic band */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: "4", l: "Disciplines" },
            { v: `${totalMethods}+`, l: "Methods run" },
            { v: "7", l: "Industries" },
            { v: "End-to-end", l: "Field to report" }
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-card p-5">
                <p className="display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold leading-none text-ink">
                  {s.v}
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-wider text-faint">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {researchExposure.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div
                className="group relative h-full overflow-hidden rounded-3xl border border-line bg-card p-7 transition-shadow duration-500 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.7)]"
                style={{ borderTopColor: cat.accent, borderTopWidth: 3 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className="text-stroke display text-5xl font-bold"
                      style={{ WebkitTextStroke: `1.4px ${cat.accent}55` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display mt-2 text-xl font-medium text-ink">{cat.title}</h3>
                  </div>
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-[13px] font-semibold text-paper"
                    style={{ background: cat.accent }}
                  >
                    {cat.items.length}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-[12.5px] font-medium text-soft transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Industries */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3">
            <span className="eyebrow text-faint">Industries</span>
            <span className="h-px flex-1 bg-line" />
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full bg-ink px-3.5 py-1.5 text-[12.5px] font-medium text-paper"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
