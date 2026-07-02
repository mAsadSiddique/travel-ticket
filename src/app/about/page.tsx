import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { ROUTES } from "@/constant/routes";
import { createPageMetadata } from "@/constant/site-meta-data";
import { AboutPageContent } from "@/view/about/about-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Get A Ticket — UK travel booking assistance for flights, holidays, city breaks, and more.",
  path: ROUTES.about,
});

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
      <Footer />
    </>
  );
}
