import { Hero } from "@/view/home/components/hero";
import { Destinations } from "@/view/home/components/destinations";
import { Airlines } from "@/view/home/components/airlines";
import { Tours } from "@/view/home/components/tours";
import { WhyChooseUs } from "@/view/home/components/why-choose-us";
import { Testimonials } from "@/view/home/components/testimonials";
import { Callback } from "@/view/home/components/callback";
import { Footer } from "@/layout/footer";

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
