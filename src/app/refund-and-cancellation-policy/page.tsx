import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { ROUTES } from "@/constant/routes";
import { LegalDocument } from "@/view/legal/legal-document";
import { createPageMetadata } from "@/constant/site-meta-data";
import { refundAndCancellationPolicy } from "@/constant/content/refund-and-cancellation-policy";

export const metadata: Metadata = createPageMetadata({
  title: "Refund & Cancellation Policy",
  description:
    "Read Get A Ticket's Refund & Cancellation Policy for flights, holidays, hotels, and travel bookings.",
  path: ROUTES.refundAndCancellationPolicy,
});

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
