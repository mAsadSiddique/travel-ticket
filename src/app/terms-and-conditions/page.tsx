import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/sections/footer";
import { termsAndConditions } from "@/content/terms-and-conditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions for using Get A Ticket's website and travel booking services.",
};

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
