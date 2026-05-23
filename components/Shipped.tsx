import { shippedProjects } from "@/lib/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Shipped() {
  return (
    <section id="projects" className="mx-auto max-w-shell px-5 pt-28 sm:px-8 sm:pt-36">
      <SectionHeader
        index="04"
        label="Shipped Products"
        title={
          <>
            Things that are{" "}
            <span className="serif font-normal italic text-signal">live in the world.</span>
          </>
        }
        intro="Real products deployed on Vercel — built to prove the systems thinking, not just describe it."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {shippedProjects.map((p, i) => {
          const isLive = p.status === "Live";
          const Wrapper = (props: { children: React.ReactNode }) =>
            isLive ? (
              <a href={p.href} target="_blank" rel="noreferrer" className="group block h-full">
                {props.children}
              </a>
            ) : (
              <div className="group block h-full cursor-default">{props.children}</div>
            );

          return (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <Wrapper>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-card p-7 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.7)]">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium ${
                        isLive ? "bg-cat3/12 text-cat3" : "bg-signal/12 text-signalink"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-cat3" : "bg-signal"}`}
                      />
                      {p.status}
                    </span>
                    <span className="display text-sm text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="display mt-8 text-2xl font-medium leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-soft">{p.summary}</p>

                  <span
                    className={`mt-6 inline-flex items-center gap-2 text-[13px] font-medium ${
                      isLive ? "text-ink" : "text-faint"
                    }`}
                  >
                    {isLive ? "Visit product" : "In progress"}
                    {isLive && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    )}
                  </span>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
