import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/sections/footer";
import { disclaimer } from "@/content/disclaimer";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read Get A Ticket's Disclaimer regarding travel information, booking assistance, and website use.",
};

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
