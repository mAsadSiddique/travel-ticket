import type { LegalDocumentContent } from "./legal-types";

export const refundAndCancellationPolicy = {
  title: "Refund & Cancellation Policy",
  intro: [
    "At Get A Ticket, we aim to provide clear and transparent information regarding cancellations and refunds. Please read this policy carefully before making a booking request or purchasing travel services.",
    "As travel arrangements are provided by airlines, hotels, tour operators, and other travel suppliers, refund and cancellation eligibility is subject to the terms and conditions of the relevant supplier.",
  ],
  sections: [
    {
      id: "flight-bookings",
      title: "Flight Bookings",
      blocks: [
        {
          heading: "Airline Cancellation Policies",
          paragraphs: [
            "Airline tickets are subject to the fare rules and conditions set by the airline at the time of booking.",
          ],
          listIntro: "Depending on the ticket type purchased:",
          list: [
            "Some tickets may be refundable.",
            "Some tickets may be partially refundable.",
            "Some tickets may be non-refundable.",
            "Change fees and fare differences may apply.",
          ],
        },
        {
          paragraphs: [
            "Any refund approved by the airline will be processed according to the airline's policies and procedures.",
          ],
        },
        {
          heading: "Voluntary Cancellations",
          paragraphs: [
            "If you choose to cancel your booking, any refund will be subject to:",
          ],
          list: [
            "Airline fare rules",
            "Supplier cancellation policies",
            "Applicable administrative fees",
            "Non-refundable taxes or charges where applicable",
          ],
        },
      ],
    },
    {
      id: "holiday-packages",
      title: "Holiday Packages and Hotel Bookings",
      blocks: [
        {
          paragraphs: [
            "Cancellation terms for holiday packages, hotels, tours, and other travel services vary by supplier.",
          ],
          listIntro: "Refund eligibility depends on factors including:",
          list: [
            "Booking type",
            "Travel dates",
            "Supplier policies",
            "Cancellation timing",
          ],
        },
        {
          paragraphs: [
            "Specific cancellation terms will be communicated during the booking process where applicable.",
          ],
        },
      ],
    },
    {
      id: "changes-to-bookings",
      title: "Changes to Bookings",
      blocks: [
        {
          paragraphs: [
            "Requests to modify travel dates, passenger details, destinations, or other booking information are subject to:",
          ],
          list: [
            "Supplier approval",
            "Availability",
            "Applicable change fees",
            "Fare or rate differences",
          ],
        },
        {
          paragraphs: [
            "Changes cannot be guaranteed and may incur additional costs.",
          ],
        },
      ],
    },
    {
      id: "supplier-initiated-cancellations",
      title: "Supplier-Initiated Cancellations",
      blocks: [
        {
          paragraphs: [
            "If an airline, hotel, tour operator, or travel supplier cancels a booked service, available options may include:",
          ],
          list: [
            "Alternative travel arrangements",
            "Travel credits or vouchers",
            "Refunds where authorised by the supplier",
          ],
        },
        {
          paragraphs: [
            "Any refund amount and processing timeline will depend on the supplier's policies.",
          ],
        },
      ],
    },
    {
      id: "refund-processing",
      title: "Refund Processing",
      blocks: [
        {
          paragraphs: ["Where a refund is approved:"],
          list: [
            "Refunds will be processed to the original payment method whenever possible.",
            "Processing times vary depending on the supplier, airline, financial institution, and payment provider.",
            "Refund timelines may range from several business days to several weeks.",
          ],
        },
        {
          paragraphs: [
            "Get A Ticket cannot control supplier processing times once a refund request has been submitted.",
          ],
        },
      ],
    },
    {
      id: "non-refundable-situations",
      title: "Non-Refundable Situations",
      blocks: [
        {
          paragraphs: [
            "Refunds may not be available in circumstances including:",
          ],
          list: [
            "Non-refundable fares or promotional tickets",
            'Failure to travel or "no-show" situations',
            "Incorrect information provided by the customer",
            "Failure to obtain required travel documents or visas",
            "Breach of airline or supplier terms and conditions",
          ],
        },
      ],
    },
    {
      id: "travel-insurance",
      title: "Travel Insurance",
      blocks: [
        {
          paragraphs: [
            "We strongly recommend purchasing appropriate travel insurance to help protect against unforeseen events, cancellations, medical emergencies, travel disruptions, or other unexpected circumstances.",
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
            "Refunds, changes, or cancellations resulting from circumstances beyond reasonable control may be subject to supplier policies. Such circumstances may include:",
          ],
          list: [
            "Natural disasters",
            "Severe weather",
            "Government actions",
            "Travel restrictions",
            "Public health emergencies",
            "Industrial actions or strikes",
            "Other extraordinary events",
          ],
        },
      ],
    },
    {
      id: "booking-assistance-services",
      title: "Booking Assistance Services",
      blocks: [
        {
          paragraphs: [
            "Get A Ticket acts as a travel information and booking assistance platform. Refund decisions are generally determined by the relevant travel supplier, airline, hotel, or tour operator in accordance with their policies.",
          ],
        },
      ],
    },
  ],
} satisfies LegalDocumentContent;
