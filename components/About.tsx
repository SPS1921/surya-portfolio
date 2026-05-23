import { impactHighlights } from "@/lib/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-shell px-5 pt-28 sm:px-8 sm:pt-36">
      <SectionHeader
        index="01"
        label="About"
        title={
          <>
            A high-agency operator who turns{" "}
            <span className="serif font-normal italic text-signal">messy ambiguity</span> into
            structure.
          </>
        }
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-[16px] leading-relaxed text-soft">
          <p>
            I started my career in sales — learning execution, persuasion, stakeholder handling and
            how real business conversations move things forward.
          </p>
          <p>
            That foundation carried into <span className="font-semibold text-ink">Logit Group</span>,
            where I worked on international research operations and client-facing coordination across
            multi-country projects for global stakeholders.
          </p>
          <p>
            Over time, I became increasingly interested in the systems behind execution — how
            workflows scale, where operations break, and how clarity compounds speed inside growing
            teams.
          </p>
          <p>
            Today, at <span className="font-semibold text-ink">Brooksphere Research</span>, I work
            across founder&apos;s-office execution, research operations, automation and AI-assisted
            systems — building workflows, dashboards and internal tooling that help teams operate
            faster and with greater clarity.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-3xl border border-line bg-card p-7 sm:p-9">
            <p className="eyebrow text-faint">Operating principles</p>
            <ul className="mt-5 space-y-4">
              {[
                "Bias to ownership — I close loops without being asked.",
                "Systems over heroics — repeatable beats impressive-once.",
                "Clarity is a deliverable — docs, dashboards, decisions.",
                "AI as leverage — speed without losing judgment."
              ].map((line, i) => (
                <li key={line} className="flex gap-4">
                  <span className="display text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] leading-snug text-ink">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Impact stat band */}
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {impactHighlights.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.07} className="bg-paper">
            <div className="h-full bg-paper p-6 sm:p-7">
              <p className="display text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-none text-ink">
                {stat.value}
              </p>
              <p className="mt-3 text-[13px] leading-snug text-soft">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
