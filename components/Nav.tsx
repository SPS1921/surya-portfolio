"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-line bg-paper/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-paper transition-transform duration-500 group-hover:rotate-[20deg]">
              <span className="display text-sm font-semibold">S</span>
            </span>
            <span className="display text-[15px] font-semibold tracking-tight">
              Surya<span className="text-signal">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="link-sweep text-[13px] font-medium text-soft transition-colors hover:text-ink"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-[12px] font-medium text-soft sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cat3 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cat3" />
              </span>
              Open to roles
            </span>
            <a
              href="#contact"
              className="btn-fill rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink transition-colors duration-300 hover:border-signal hover:text-white"
            >
              Let&apos;s talk
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            >
              <span className="display text-lg leading-none">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl border border-line bg-card/95 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-hairline py-3 text-[15px] font-medium text-ink last:border-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
