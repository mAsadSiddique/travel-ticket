import type { LegalDocumentContent } from "./legal-types";

export const disclaimer = {
  title: "Disclaimer",
  intro: [
    "The information provided on this website is for general informational purposes only. While Get A Ticket strives to keep all information accurate, current, and complete, we make no representations or warranties of any kind regarding the accuracy, reliability, suitability, or availability of any information, products, services, or travel offers displayed on this website.",
    "Any reliance you place on information provided on this website is strictly at your own risk.",
  ],
  sections: [
    {
      id: "travel-information",
      title: "Travel Information",
      blocks: [
        {
          paragraphs: [
            "Flight schedules, fares, hotel rates, holiday package prices, availability, and travel-related information are subject to change without notice.",
            "Travel offers displayed on the website may become unavailable, expire, or change due to supplier updates, demand, currency fluctuations, taxes, fees, or other factors beyond our control.",
            "All prices and travel arrangements are subject to confirmation at the time of booking.",
          ],
        },
      ],
    },
    {
      id: "booking-assistance",
      title: "Booking Assistance",
      blocks: [
        {
          paragraphs: [
            "Get A Ticket provides travel information and booking assistance services. Travel products and services may be supplied by airlines, hotels, tour operators, travel providers, or other third-party suppliers.",
            "The final terms, conditions, availability, pricing, and travel arrangements are determined by the relevant supplier.",
          ],
        },
      ],
    },
    {
      id: "no-guarantees",
      title: "No Guarantees",
      blocks: [
        {
          paragraphs: ["We do not guarantee:"],
          list: [
            "Availability of specific flights, hotels, or holiday packages.",
            "The lowest available fares or prices.",
            "Continuous availability of advertised promotions.",
            "Error-free operation of the website.",
            "Uninterrupted access to website services.",
          ],
        },
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      blocks: [
        {
          paragraphs: [
            "This website may contain information relating to third-party suppliers and service providers.",
          ],
          listIntro: "Get A Ticket is not responsible for:",
          list: [
            "Actions or omissions of third-party suppliers.",
            "Changes made by airlines, hotels, or travel providers.",
            "Supplier cancellations or schedule changes.",
            "Service interruptions caused by third parties.",
          ],
        },
        {
          paragraphs: [
            "Users should review the applicable terms and conditions of the relevant travel supplier before making a booking.",
          ],
        },
      ],
    },
    {
      id: "external-links",
      title: "External Links",
      blocks: [
        {
          paragraphs: [
            "Our website may contain links to third-party websites for informational purposes.",
            "We do not control, endorse, or assume responsibility for the content, policies, or practices of any third-party websites.",
            "Visiting external websites is at your own discretion and risk.",
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      blocks: [
        {
          paragraphs: [
            "To the fullest extent permitted by applicable law, Get A Ticket shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:",
          ],
          list: [
            "Use of this website.",
            "Reliance on website content.",
            "Travel disruptions.",
            "Supplier actions or omissions.",
            "Website interruptions or technical issues.",
            "Losses resulting from inaccurate or outdated information.",
          ],
        },
      ],
    },
    {
      id: "travel-documentation",
      title: "Travel Documentation",
      blocks: [
        {
          paragraphs: [
            "Customers are solely responsible for ensuring they possess valid:",
          ],
          list: [
            "Passports",
            "Visas",
            "Travel permits",
            "Health documentation",
            "Any other required travel documents",
          ],
        },
        {
          paragraphs: [
            "Failure to meet entry requirements may result in denied boarding or entry, for which Get A Ticket accepts no responsibility.",
          ],
        },
      ],
    },
    {
      id: "force-majeure",
      title: "Force Majeure",
      blocks: [
        {
          paragraphs: [
            "Get A Ticket shall not be held responsible for delays, cancellations, losses, or disruptions caused by circumstances beyond reasonable control, including but not limited to:",
          ],
          list: [
            "Natural disasters",
            "Severe weather conditions",
            "Government actions",
            "Travel restrictions",
            "Public health emergencies",
            "Industrial disputes or strikes",
            "Technical failures",
            "Other unforeseen events",
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
            "We reserve the right to modify, suspend, or discontinue any part of the website without prior notice.",
            "We do not guarantee that the website will always be available, secure, or free from errors.",
          ],
        },
      ],
    },
    {
      id: "important-notice",
      title: "Important Notice",
      blocks: [
        {
          paragraphs: [
            "All travel products, prices, availability, and promotional offers displayed on this website are subject to change and confirmation. Customers should carefully review all booking details, supplier terms, and travel requirements before making travel arrangements.",
          ],
        },
      ],
    },
  ],
} satisfies LegalDocumentContent;
