import { Reveal, RevealWords } from "./Reveal";

const links = [
  { label: "Email", value: "suryap1921@gmail.com", href: "mailto:suryap1921@gmail.com" },
  { label: "LinkedIn", value: "in/suryapratap1921", href: "https://www.linkedin.com/in/suryapratap1921/" },
  { label: "GitHub", value: "sps1921", href: "https://github.com/sps1921" }
];

export function Contact() {
  return (
    <footer id="contact" className="mt-28 sm:mt-36">
      <div className="border-t border-line bg-paperdeep text-ink">
        <div className="mx-auto max-w-shell px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <span className="eyebrow text-faint">08 / Contact</span>
          </Reveal>

          <h2 className="display mt-6 text-[clamp(2.4rem,8vw,6rem)] font-semibold leading-[0.95]">
            <span className="block">
              <RevealWords text="Let's build" trigger="mount" />
            </span>
            <span className="block">
              <span className="serif font-normal italic text-signal">
                <RevealWords text="something that ships." delay={0.2} trigger="mount" />
              </span>
            </span>
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-soft">
              Open to Founder&apos;s Office, Product Operations and APM roles. If you need an
              operator who closes loops and builds systems, let&apos;s talk.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <a
              href="mailto:suryap1921@gmail.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[15px] font-medium text-paper transition-transform duration-300 hover:scale-[1.02]"
            >
              suryap1921@gmail.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>

          {/* link grid */}
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group bg-paperdeep p-6 transition-colors hover:bg-white/[0.04]"
              >
                <p className="eyebrow text-faint">{l.label}</p>
                <p className="mt-2 flex items-center justify-between text-[15px] font-medium text-ink">
                  {l.value}
                  <span className="text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-signal">
                    ↗
                  </span>
                </p>
              </a>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 text-[12.5px] text-faint sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} Surya Pratap Singh · Delhi NCR, India</span>
            <span className="flex items-center gap-2">
              Built with Next.js, Framer Motion &amp; a lot of
              <span className="text-signal">☕</span>
            </span>
            <a href="#top" className="link-sweep font-medium text-soft hover:text-ink">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
