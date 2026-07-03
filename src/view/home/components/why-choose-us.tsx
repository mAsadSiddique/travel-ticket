import {
  BadgePoundSterling,
  HeadphonesIcon,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { BlurFade } from "@/components/elements/blur-fade";
import { SectionHeader } from "@/components/elements/section-header";
import { HoverEffect } from "@/components/elements/card-hover-effect";

const FEATURES = [
  {
    icon: BadgePoundSterling,
    title: "Best price guarantee",
    text: "Find it cheaper elsewhere within 24 hours and we'll match it, plus give you £20 credit.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 real support",
    text: "A UK-based team, not a chatbot, on hand around the clock for delays, changes, or questions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, protected booking",
    text: "ATOL-protected packages and encrypted payments, so your trip and your money are covered.",
  },
  {
    icon: RefreshCcw,
    title: "Flexible cancellation",
    text: "Plans change. Most fares can be amended or refunded with no fuss and no call centre maze.",
  },
  {
    icon: UserCheck,
    title: "Verified reviews",
    text: "Every review comes from a traveller who actually booked through Get A Ticket — no exceptions.",
  },
  {
    icon: Sparkles,
    title: "Expert travel agents",
    text: "Need help building an itinerary? Our agents have flown the routes and walked the streets.",
  },
];

export function WhyChooseUs() {
  const items = FEATURES.map((f) => ({
    title: f.title,
    description: f.text,
    link: f.title === "Verified reviews" ? "#reviews" : "#search",
    icon: <f.icon className="h-5 w-5" strokeWidth={1.75} />,
  }));

  return (
    <section id="why-us" className="bg-cloud py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <BlurFade>
          <SectionHeader
            title="Why choose us"
            description="Booking that respects your time — fair fares, real UK support, and protections that travel with you."
          />
        </BlurFade>

        <BlurFade delay={0.08}>
          <HoverEffect items={items} />
        </BlurFade>
      </div>
    </section>
  );
}
