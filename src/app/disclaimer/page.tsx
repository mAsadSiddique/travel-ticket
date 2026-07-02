import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { ROUTES } from "@/constant/routes";
import { LegalDocument } from "@/view/legal/legal-document";
import { createPageMetadata } from "@/constant/site-meta-data";
import { disclaimer } from "@/constant/content/disclaimer";

export const metadata: Metadata = createPageMetadata({
  title: "Disclaimer",
  description:
    "Read Get A Ticket's Disclaimer regarding travel information, booking assistance, and website use.",
  path: ROUTES.disclaimer,
});

export default function DisclaimerPage() {
  return (
    <>
      <LegalDocument
        title={disclaimer.title}
        intro={disclaimer.intro}
        sections={disclaimer.sections}
      />
      <Footer />
    </>
  );
}
