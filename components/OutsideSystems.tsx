"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { outsideSystems } from "@/lib/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

// Bento spans — mobile stacks, sm = 2-col, lg = 6-col editorial bento.
const spans = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2", // Cooking — tall feature
  "sm:col-span-2 lg:col-span-4", // Photography — wide
  "lg:col-span-2", // Podcasts
  "lg:col-span-2", // Quiet Roads
  "sm:col-span-2 lg:col-span-6" // Independent Living — full-width banner
];

function ExpandIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 3H3v5M21 8V3h-5M16 21h5v-5M3 16v5h5" />
    </svg>
  );
}

function Media({
  image,
  accent,
  alt,
  zoom = true,
  cover = true
}: {
  image?: string;
  accent: string;
  alt: string;
  zoom?: boolean;
  cover?: boolean;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={`${cover ? "object-cover" : "object-contain"} ${
          zoom ? "transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" : ""
        }`}
      />
    );
  }
  // Fallback when no image is supplied — ambient gradient panel keeps the layout intact.
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(120% 100% at 30% 20%, ${accent}33, transparent 60%), #16130E`
      }}
    />
  );
}

export function OutsideSystems() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  const item = active !== null ? outsideSystems[active] : null;

  return (
    <section id="outside" className="relative mx-auto max-w-shell px-5 pt-28 sm:px-8 sm:pt-36">
      {/* ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-44 h-[440px] w-[82%] -translate-x-1/2 rounded-full bg-signal/10 blur-[130px]"
      />

      <div className="relative z-10">
        <SectionHeader
          index="07"
          label="Outside Systems"
          title={
            <>
              Life outside the{" "}
              <span className="serif font-normal italic text-signal">operating systems.</span>
            </>
          }
          intro="Outside workflows, dashboards and operating systems — these are the quieter things that keep me balanced, curious and observant."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:auto-rows-[230px]">
          {outsideSystems.map((seg, i) => (
            <Reveal
              key={seg.title}
              delay={i * 0.07}
              className={`min-h-[280px] lg:min-h-0 ${spans[i]}`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open ${seg.title}`}
                className="group relative block h-full w-full overflow-hidden rounded-3xl border border-line bg-card text-left transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.7)]"
              >
                <Media image={seg.image} accent={seg.accent} alt={seg.title} />

                {/* readability overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-all duration-500 group-hover:from-black/90" />

                {/* expand affordance */}
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-ink/80 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  <ExpandIcon />
                </span>

                {/* content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="eyebrow text-faint">{seg.mood}</span>
                  <h3 className="display mt-2 text-[clamp(1.2rem,2.3vw,1.7rem)] font-medium text-ink">
                    {seg.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-soft line-clamp-2 transition-all duration-500 group-hover:line-clamp-none">
                    {seg.text}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {item && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-xl"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={item.title}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-line bg-card/80 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/40 text-lg text-ink backdrop-blur-md transition-colors hover:bg-black/60"
              >
                ×
              </button>
              <div className="relative h-[46vh] w-full bg-black sm:h-[54vh]">
                <Media
                  image={item.image}
                  accent={item.accent}
                  alt={item.title}
                  zoom={false}
                  cover={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
              <div className="p-7 sm:p-9">
                <span className="eyebrow text-faint">{item.mood}</span>
                <h3 className="display mt-2 text-2xl font-medium text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-soft">{item.text}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
