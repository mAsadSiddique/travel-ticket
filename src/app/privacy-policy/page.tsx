import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/sections/footer";
import { privacyPolicy } from "@/content/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Get A Ticket's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

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
