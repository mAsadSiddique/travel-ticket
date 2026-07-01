import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { Footer } from "@/components/sections/footer";
import { cookiePolicy } from "@/content/cookie-policy";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read Get A Ticket's Cookie Policy to understand how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <LegalDocument
        title={cookiePolicy.title}
        intro={cookiePolicy.intro}
        sections={cookiePolicy.sections}
      />
      <Footer />
    </>
  );
}
