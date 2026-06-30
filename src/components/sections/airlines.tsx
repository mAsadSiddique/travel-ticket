import Image from "next/image";
import { airlineLogoUrl, airlines, type Airline } from "@/data/travel";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeader } from "@/components/ui/section-header";

function AirlineChip({ airline }: { airline: Airline }) {
  return (
    <a
      href="#search"
      aria-label={`Search ${airline.name} flights`}
      className="group flex shrink-0 items-center gap-4 rounded-2xl border border-line/70 bg-white px-5 py-3.5 shadow-[0_14px_44px_-32px_rgba(12,40,71,0.4)] transition-[border-color,background-color] duration-300 hover:border-kingfisher/30 hover:bg-white sm:px-6 sm:py-4"
    >
      <div className="flex h-9 w-20 shrink-0 items-center justify-center sm:h-10 sm:w-24">
        <Image
          src={airlineLogoUrl(airline.code)}
          alt=""
          width={96}
          height={40}
          className="h-7 w-auto max-w-[5.5rem] object-contain sm:h-8 sm:max-w-[6rem]"
        />
      </div>
      <div className="min-w-0">
        <p className="board-text text-[10px] font-semibold uppercase tracking-[0.18em] text-kingfisher/75">
          {airline.code}
        </p>
        <p className="truncate text-sm font-medium text-ink/85">{airline.name}</p>
      </div>
    </a>
  );
}

export function Airlines() {
  const midpoint = Math.ceil(airlines.length / 2);
  const rowOne = airlines.slice(0, midpoint);
  const rowTwo = airlines.slice(midpoint);

  const marqueeMask =
    "[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]";

  return (
    <section id="airlines" className="bg-cloud py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BlurFade>
          <SectionHeader
            title="Airline partners"
            description="Global flag carriers and UK favourites — one search, every seat class, every route."
          />
        </BlurFade>
      </div>

      <BlurFade delay={0.08}>
        <div className="space-y-5">
          <Marquee
            pauseOnHover
            repeat={3}
            className={`${marqueeMask} [--duration:48s] [--gap:1rem] py-1 sm:[--gap:1.25rem]`}
          >
            {rowOne.map((airline) => (
              <AirlineChip key={airline.code} airline={airline} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            repeat={3}
            className={`${marqueeMask} [--duration:54s] [--gap:1rem] py-1 sm:[--gap:1.25rem]`}
          >
            {rowTwo.map((airline) => (
              <AirlineChip key={airline.code} airline={airline} />
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  );
}
