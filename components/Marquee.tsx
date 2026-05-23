import { workAreas } from "@/lib/portfolio";

export function Marquee() {
  const items = [...workAreas, ...workAreas];
  return (
    <section className="mt-24 border-y border-line bg-paperdeep py-5 sm:mt-32">
      <div className="relative flex overflow-hidden">
        <div className="marquee-track animate-marquee">
          {items.map((area, i) => (
            <span key={`${area}-${i}`} className="flex items-center">
              <span className="display whitespace-nowrap px-7 text-[15px] font-medium text-ink/80">
                {area}
              </span>
              <span className="text-signal">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
