import { BlurFade } from "@/components/elements/blur-fade";
import { SectionHeader } from "@/components/elements/section-header";
import { DestinationsCarousel } from "@/components/ui/destinations-carousel";

export function Destinations() {
  return (
    <section id="destinations" className="overflow-hidden pt-12 pb-4 lg:pt-16 lg:pb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BlurFade>
          <SectionHeader
            title="Our popular destinations"
            description="The routes our travellers book most, from weekend city breaks to long-haul escapes — fares shown are starting one-way prices."
          />
        </BlurFade>
      </div>

      <BlurFade delay={0.08}>
        <DestinationsCarousel />
      </BlurFade>
    </section>
  );
}
