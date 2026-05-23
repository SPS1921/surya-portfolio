"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { selectedProjects } from "@/lib/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Work() {
  const [active, setActive] = useState(0);
  const project = selectedProjects[active];

  return (
    <section id="work" className="mx-auto max-w-shell px-5 pt-28 sm:px-8 sm:pt-36">
      <SectionHeader
        index="02"
        label="Selected Work"
        title={
          <>
            Systems, workflows &amp; products{" "}
            <span className="serif font-normal italic text-signal">I&apos;ve shaped.</span>
          </>
        }
        intro="Hover a project to preview the problem, the build and the outcome. Operator work — not just screens."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* List */}
        <ul className="border-t border-line">
          {selectedProjects.map((p, i) => (
            <li key={p.title}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`work-row group flex w-full items-center gap-5 border-b border-line py-6 text-left transition-colors ${
                  active === i ? "text-ink" : "text-soft"
                }`}
              >
                <span
                  className={`display text-sm tabular-nums transition-colors ${
                    active === i ? "text-signal" : "text-faint"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="work-title display block text-[clamp(1.3rem,3.2vw,2rem)] font-medium leading-tight">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-[12px] font-medium uppercase tracking-wider text-faint">
                    {p.type} · {p.year}
                  </span>
                </span>
                <span
                  className={`text-xl transition-all duration-300 ${
                    active === i ? "translate-x-0 text-signal opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                >
                  →
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Sticky preview (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                className="overflow-hidden rounded-3xl border border-line bg-card"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-paperdeep">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="display text-2xl font-medium text-ink">{project.title}</h3>
                  <dl className="mt-5 space-y-3.5">
                    <PreviewRow label="Problem" value={project.problem} />
                    <PreviewRow label="Build" value={project.solution} />
                    <PreviewRow label="Impact" value={project.impact} />
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-[12px] font-medium text-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile detail cards */}
      <div className="mt-8 space-y-6 lg:hidden">
        {selectedProjects.map((p) => (
          <div key={p.title} className="overflow-hidden rounded-3xl border border-line bg-card">
            <div className="relative aspect-[16/10] w-full bg-paperdeep">
              <Image src={p.image} alt={p.title} fill sizes="100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="display text-xl font-medium text-ink">{p.title}</h3>
              <dl className="mt-4 space-y-3">
                <PreviewRow label="Problem" value={p.problem} />
                <PreviewRow label="Build" value={p.solution} />
                <PreviewRow label="Impact" value={p.impact} />
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-[12px] font-medium text-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-16 shrink-0 text-[11px] font-semibold uppercase tracking-wider text-signal">
        {label}
      </dt>
      <dd className="text-[14px] leading-snug text-soft">{value}</dd>
    </div>
  );
}
