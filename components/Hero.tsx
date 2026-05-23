"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealWords } from "./Reveal";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/suryapratap1921/" },
  { label: "GitHub", href: "https://github.com/sps1921" },
  { label: "Email", href: "mailto:suryap1921@gmail.com" }
];

export function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        {/* meta bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5 text-[12px] font-medium text-soft"
        >
          <span className="eyebrow text-faint">00 / Portfolio · MMXXVI</span>
          <span className="hidden sm:block">Delhi NCR, India · 28.6° N, 77.2° E</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Founder&apos;s Office · Product Ops · APM
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-[1.45fr_0.85fr] lg:gap-12 lg:pt-14">
          {/* Headline */}
          <div>
            <h1 className="display text-[clamp(2.6rem,8.5vw,6.4rem)] font-semibold text-ink">
              <span className="block">
                <RevealWords text="I turn ambiguity" trigger="mount" />
              </span>
              <span className="block">
                <span className="serif font-normal italic text-signal">
                  <RevealWords text="into operating systems" delay={0.25} trigger="mount" />
                </span>
              </span>
              <span className="block">
                <RevealWords text="for founder's offices." delay={0.5} trigger="mount" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 max-w-xl text-[16px] leading-relaxed text-soft sm:text-[17px]"
            >
              I&apos;m <span className="font-semibold text-ink">Surya Pratap Singh</span> — a
              high-agency operator across research operations, product ops and AI-assisted
              execution. Two years turning proposals, fieldwork and dashboards into things that
              actually ship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="btn-fill group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-paper transition-colors hover:text-white"
              >
                View selected work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
              <a
                href="/Surya-Pratap-Singh-Resume.pdf"
                className="link-sweep inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[14px] font-medium text-ink transition-colors hover:border-ink"
              >
                Download résumé
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-9 flex items-center gap-5"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="link-sweep text-[13px] font-medium text-soft hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait + floating infographic chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-card">
              <div className="absolute left-4 top-4 z-10 rounded-full bg-paperdeep/80 px-3 py-1 text-[11px] font-medium text-ink backdrop-blur">
                Surya Pratap Singh
              </div>
              <Image
                src="/surya-linkedin.png"
                alt="Surya Pratap Singh"
                width={480}
                height={560}
                priority
                className="aspect-[4/5] w-full object-cover grayscale-[0.15]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-10 rounded-2xl border border-line bg-card px-4 py-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] sm:-left-8"
            >
              <p className="display text-2xl font-semibold text-ink">2+</p>
              <p className="text-[11px] leading-tight text-soft">years of ops &amp; research</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 bottom-16 rounded-2xl border border-line bg-card px-4 py-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)] sm:-right-6"
            >
              <p className="display text-2xl font-semibold text-signal">2</p>
              <p className="text-[11px] leading-tight text-soft">live products shipped</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-8 rounded-2xl bg-ink px-4 py-3 text-paper shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)]"
            >
              <p className="display text-2xl font-semibold">5+</p>
              <p className="text-[11px] leading-tight text-paper/70">research formats</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
