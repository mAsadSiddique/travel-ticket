import type { Metadata } from "next";
import { Footer } from "@/layout/footer";
import { ROUTES } from "@/constant/routes";
import { createPageMetadata } from "@/constant/site-meta-data";
import { ContactPageContent } from "@/view/contact/contact-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Get A Ticket for flight and holiday enquiries. Reach our UK travel team by phone, email, or the contact form.",
  path: ROUTES.contact,
});

export default function ContactPage() {
  return (
    <>
      <ContactPageContent />
      <Footer />
    </>
  );
}
