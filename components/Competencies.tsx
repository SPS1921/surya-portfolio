import { competencies, exploring } from "@/lib/portfolio";
import { Reveal } from "./Reveal";

const groups = Object.entries(competencies);

export function Competencies() {
  return (
    <section className="mx-auto max-w-shell px-5 pt-24 sm:px-8 sm:pt-28">
      <Reveal>
        <div className="flex items-center gap-3 text-faint">
          <span className="eyebrow">06</span>
          <span className="h-px w-10 bg-line" />
          <span className="eyebrow text-soft">Capability Matrix</span>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([group, skills], i) => (
          <Reveal key={group} delay={(i % 3) * 0.06} className="bg-card">
            <div className="h-full bg-card p-7">
              <div className="flex items-baseline gap-3">
                <span className="display text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-[17px] font-medium text-ink">{group}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-[14px] text-soft">
                    <span className="h-1 w-1 rounded-full bg-faint" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {/* CTA tile fills the grid */}
        <Reveal delay={0.12} className="bg-paperdeep">
          <a
            href="#contact"
            className="group flex h-full flex-col justify-between bg-paperdeep p-7 text-ink transition-colors hover:bg-card"
          >
            <span className="serif text-[22px] italic leading-tight text-ink/90">
              &ldquo;Give it to the person who closes loops.&rdquo;
            </span>
            <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-signal">
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </Reveal>
      </div>

      {/* Currently exploring */}
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 rounded-3xl border border-dashed border-line bg-paperdeep p-6">
          <span className="eyebrow flex items-center gap-2 text-faint">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Currently exploring
          </span>
          <div className="flex flex-wrap gap-2">
            {exploring.map((x) => (
              <span
                key={x}
                className="rounded-full border border-line bg-card px-3.5 py-1.5 text-[12.5px] font-medium text-ink"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
