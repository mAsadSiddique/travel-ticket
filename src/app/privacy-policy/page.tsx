import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { ROUTES } from "@/constant/routes";
import { LegalDocument } from "@/view/legal/legal-document";
import { createPageMetadata } from "@/constant/site-meta-data";
import { privacyPolicy } from "@/constant/content/privacy-policy";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read Get A Ticket's Privacy Policy to understand how we collect, use, and protect your personal information.",
  path: ROUTES.privacyPolicy,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalDocument
        title={privacyPolicy.title}
        intro={privacyPolicy.intro}
        sections={privacyPolicy.sections}
      />
      <Footer />
    </>
  );
}
