import { PlaneTakeoff } from "lucide-react";
import { BookingCard } from "@/components/ui/booking-card";
import { BlurFade } from "@/components/elements/blur-fade";
import { NumberTicker } from "@/components/elements/number-ticker";
import { stats } from "@/constant/location-data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-32 sm:pb-12 sm:pt-36">
      {/* Ambient sky texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-kingfisher/15 blur-3xl" />
        <div className="absolute top-10 left-[-10%] h-[360px] w-[360px] rounded-full bg-kingfisher-light/25 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M-50 620 C 250 520, 450 700, 720 520 S 1250 380, 1500 460"
            fill="none"
            stroke="#1e93d8"
            strokeWidth="1.4"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
        <BlurFade static>
          <div className="flex flex-col items-start gap-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-kingfisher">
              <PlaneTakeoff className="h-3.5 w-3.5" /> UK&apos;s favourite fare board
            </span>

            <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]">
              Fly the UK&apos;s skies,{" "}
              <span className="italic text-kingfisher">your way.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
              Compare every major UK airline, lock in return or one-way fares,
              and add the whole family — adults, children, and infants — in a
              single, honest search. No hidden fees, no extra tabs.
            </p>

            <div className="route-rule w-full max-w-md" />

            <div className="grid w-full grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="board-text flex items-baseline text-2xl font-semibold text-ink sm:text-3xl">
                    <NumberTicker value={s.value} decimals={s.value % 1 !== 0 ? 1 : 0} />
                    {s.suffix}
                  </span>
                  <span className="text-xs text-ink/50">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade static>
          <BookingCard />
        </BlurFade>
      </div>
    </section>
  );
}
