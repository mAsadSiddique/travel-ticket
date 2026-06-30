import { testimonials } from "@/data/travel";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const carouselTestimonials = testimonials.map((t) => ({
  quote: t.quote,
  name: t.name,
  designation: t.location,
  src: t.avatar,
}));

export function Testimonials() {
  return (
    <section id="reviews" className="overflow-hidden pt-4 pb-4 lg:pt-5 lg:pb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BlurFade>
          <SectionHeader
            title="Happy customers"
            description="Trusted by travellers across the UK — every review comes from someone who actually booked through Skyward."
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mx-auto flex justify-center">
            <CircularTestimonials
              testimonials={carouselTestimonials}
              autoplay
              colors={{
                name: "var(--ink)",
                designation: "var(--mist)",
                testimony: "color-mix(in srgb, var(--ink) 78%, transparent)",
              }}
              fontSizes={{
                name: "1.75rem",
                designation: "1rem",
                quote: "1.125rem",
              }}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
