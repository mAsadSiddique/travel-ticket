import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Get A Ticket — UK travel booking assistance for flights, holidays, city breaks, and more.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
      <Footer />
    </>
  );
}
