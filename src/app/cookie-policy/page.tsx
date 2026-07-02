import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { ROUTES } from "@/constant/routes";
import { LegalDocument } from "@/view/legal/legal-document";
import { createPageMetadata } from "@/constant/site-meta-data";
import { cookiePolicy } from "@/constant/content/cookie-policy";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "Read Get A Ticket's Cookie Policy to understand how we use cookies and similar technologies on our website.",
  path: ROUTES.cookiePolicy,
});

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
