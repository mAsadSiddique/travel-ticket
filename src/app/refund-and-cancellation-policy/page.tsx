import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/sections/footer";
import { refundAndCancellationPolicy } from "@/content/refund-and-cancellation-policy";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Read Get A Ticket's Refund & Cancellation Policy for flights, holidays, hotels, and travel bookings.",
};

export default function RefundAndCancellationPolicyPage() {
  return (
    <>
      <LegalDocument
        title={refundAndCancellationPolicy.title}
        intro={refundAndCancellationPolicy.intro}
        sections={refundAndCancellationPolicy.sections}
      />
      <Footer />
    </>
  );
}
