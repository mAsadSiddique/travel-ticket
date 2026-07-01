import type { LegalDocumentContent } from "@/content/legal-types";

export const termsAndConditions = {
  title: "Terms & Conditions",
  intro: [
    "Welcome to Get A Ticket. These Terms & Conditions govern your use of our website and services. By accessing or using this website, you agree to be bound by these Terms & Conditions.",
    "If you do not agree with any part of these terms, please do not use our website or services.",
  ],
  sections: [
    {
      id: "about-our-services",
      title: "About Our Services",
      blocks: [
        {
          paragraphs: [
            "Get A Ticket provides travel information, travel enquiry services, and booking assistance for flights, holidays, hotels, and other travel-related products and services.",
            "All bookings, prices, availability, and travel arrangements are subject to confirmation by the relevant travel supplier, airline, hotel, tour operator, or service provider.",
          ],
        },
      ],
    },
    {
      id: "website-use",
      title: "Website Use",
      blocks: [
        {
          paragraphs: ["By using this website, you agree that you will:"],
          list: [
            "Use the website lawfully and responsibly.",
            "Provide accurate and complete information when submitting enquiries.",
            "Not misuse, interfere with, or attempt to gain unauthorised access to the website.",
            "Not use the website for fraudulent or unlawful purposes.",
          ],
        },
        {
          paragraphs: [
            "We reserve the right to restrict or terminate access to users who violate these terms.",
          ],
        },
      ],
    },
    {
      id: "travel-information",
      title: "Travel Information and Availability",
      blocks: [
        {
          paragraphs: [
            "Travel prices, availability, schedules, and offers displayed on the website are provided for general information purposes and may change without notice.",
          ],
          listIntro: "We cannot guarantee:",
          list: [
            "Availability of any flight, hotel, holiday, or travel product.",
            "Specific fares or prices until confirmed at the time of booking.",
            "Availability of advertised promotions after publication.",
          ],
        },
        {
          paragraphs: [
            "All travel arrangements are subject to supplier availability and confirmation.",
          ],
        },
      ],
    },
    {
      id: "booking-requests",
      title: "Booking Requests",
      blocks: [
        {
          paragraphs: [
            "Submitting an enquiry or booking request does not constitute a confirmed booking.",
          ],
          listIntro: "A booking is only considered confirmed when:",
          list: [
            "Availability has been verified.",
            "Required information has been provided.",
            "Payment has been successfully processed (where applicable).",
            "Confirmation has been issued.",
          ],
        },
        {
          paragraphs: [
            "Customers are responsible for reviewing all booking details before accepting confirmation.",
          ],
        },
      ],
    },
    {
      id: "customer-responsibilities",
      title: "Customer Responsibilities",
      blocks: [
        {
          listIntro: "Customers are responsible for:",
          list: [
            "Providing accurate personal and travel information.",
            "Reviewing booking confirmations and travel documents.",
            "Ensuring passports, visas, and travel documents are valid.",
            "Meeting entry requirements for destinations visited.",
            "Complying with airline, hotel, and supplier policies.",
          ],
        },
        {
          paragraphs: [
            "Get A Ticket is not responsible for travel disruptions resulting from incomplete documentation or failure to meet travel requirements.",
          ],
        },
      ],
    },
    {
      id: "supplier-terms",
      title: "Supplier Terms",
      blocks: [
        {
          paragraphs: [
            "Travel products and services may be provided by third-party airlines, hotels, tour operators, and travel suppliers.",
          ],
          listIntro:
            "Bookings are subject to the terms, conditions, and policies of the relevant supplier, including:",
          list: [
            "Cancellation policies",
            "Refund policies",
            "Baggage policies",
            "Schedule changes",
            "Travel restrictions",
          ],
        },
        {
          paragraphs: ["Customers should review supplier terms before booking."],
        },
      ],
    },
    {
      id: "payments",
      title: "Payments",
      blocks: [
        {
          paragraphs: [
            "Where payments are accepted, customers agree to provide valid and accurate payment information.",
            "Prices may change before booking confirmation due to supplier updates, taxes, fees, exchange rates, or availability changes.",
            "Any applicable charges will be clearly communicated before confirmation.",
          ],
        },
      ],
    },
    {
      id: "cancellations-and-refunds",
      title: "Cancellations and Refunds",
      blocks: [
        {
          paragraphs: [
            "Cancellation and refund eligibility are subject to the terms of the relevant airline, hotel, travel supplier, or package provider.",
            "Refund processing times may vary depending on supplier policies and payment providers.",
            "Customers should review the applicable Refund & Cancellation Policy before making a booking request.",
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      blocks: [
        {
          listIntro:
            "To the fullest extent permitted by law, Get A Ticket shall not be liable for:",
          list: [
            "Travel delays or cancellations",
            "Supplier errors or omissions",
            "Airline schedule changes",
            "Hotel overbookings",
            "Loss of enjoyment",
            "Indirect or consequential losses",
            "Events beyond our reasonable control",
          ],
        },
        {
          paragraphs: [
            "Our role is limited to providing travel information and booking assistance services where applicable.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      blocks: [
        {
          paragraphs: [
            "All content on this website, including text, graphics, logos, images, and design elements, is owned by or licensed to Get A Ticket and is protected by applicable intellectual property laws.",
            "Content may not be copied, reproduced, distributed, or used without prior written permission.",
          ],
        },
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      blocks: [
        {
          paragraphs: [
            "Your use of this website is also governed by our Privacy Policy, which explains how personal information is collected, used, and protected.",
          ],
        },
      ],
    },
    {
      id: "website-availability",
      title: "Website Availability",
      blocks: [
        {
          paragraphs: [
            "We strive to maintain uninterrupted access to our website; however, we do not guarantee that the website will always be available or free from errors.",
            "We may update, suspend, or discontinue parts of the website without prior notice.",
          ],
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      blocks: [
        {
          paragraphs: [
            "We reserve the right to update these Terms & Conditions at any time.",
            "Updated versions will be published on this page, and continued use of the website constitutes acceptance of any revisions.",
          ],
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      blocks: [
        {
          paragraphs: [
            "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of England and Wales.",
            "Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
          ],
        },
      ],
    },
  ],
} satisfies LegalDocumentContent;
