import { Hero } from "@/components/sections/hero";
import { Destinations } from "@/components/sections/destinations";
import { Airlines } from "@/components/sections/airlines";
import { Tours } from "@/components/sections/tours";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Callback } from "@/components/sections/callback";
import { Footer } from "@/components/sections/footer";

export function HomePage() {
  return (
    <main className="min-h-screen bg-cloud">
      <Hero />
      <Destinations />
      <Tours />
      <WhyChooseUs />
      <Testimonials />
      <Airlines />
      <Callback />
      <Footer />
    </main>
  );
}
