import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { ROUTES } from "@/constant/routes";
import { LegalDocument } from "@/view/legal/legal-document";
import { createPageMetadata } from "@/constant/site-meta-data";
import { termsAndConditions } from "@/constant/content/terms-and-conditions";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions for using Get A Ticket's website and travel booking services.",
  path: ROUTES.termsAndConditions,
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <LegalDocument
        title={termsAndConditions.title}
        intro={termsAndConditions.intro}
        sections={termsAndConditions.sections}
      />
      <Footer />
    </>
  );
}
