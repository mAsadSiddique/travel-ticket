import {
  BadgeCheck,
  Building2,
  Clock3,
  Globe2,
  Headphones,
  MapPinned,
  Palmtree,
  Plane,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";

export type AboutSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  listIntro?: string;
};

export const aboutUs = {
  title: "About Us",
  intro: [
    "At Get A Ticket, we help travellers across the United Kingdom find competitive flight and holiday options for destinations around the world.",
    "Our goal is simple: to make travel planning easier by connecting customers with flight and holiday deals that suit their budget and travel preferences. Whether you're planning a family holiday, a city break, a business trip, or a last-minute getaway, our team is here to assist you.",
  ],
  sections: [
    {
      id: "what-we-do",
      title: "What We Do",
      listIntro:
        "Get A Ticket provides travel information and booking assistance for:",
      list: [
        "International and domestic flights",
        "Holiday packages",
        "City breaks",
        "Family holidays",
        "Beach holidays",
        "Last-minute travel deals",
        "Multi-city itineraries",
        "Group travel enquiries",
      ],
      paragraphs: [
        "Our travel specialists work to help customers explore available travel options and find suitable fares and holiday arrangements.",
      ],
    },
    {
      id: "our-commitment",
      title: "Our Commitment",
      listIntro: "We are committed to:",
      list: [
        "Providing clear and accurate travel information",
        "Offering professional customer support",
        "Helping customers compare available travel options",
        "Delivering a straightforward booking experience",
        "Maintaining transparency throughout the booking process",
      ],
    },
    {
      id: "customer-support",
      title: "Customer Support",
      paragraphs: [
        "Our support team is available to assist with travel enquiries, booking requests, itinerary questions, and general travel information.",
        "We understand that every journey is unique, and we strive to provide helpful guidance throughout the booking process.",
      ],
    },
    {
      id: "why-choose-us",
      title: "Why Choose Get A Ticket?",
      list: [
        "UK-focused travel assistance",
        "Access to a wide range of travel options",
        "Friendly customer support",
        "Assistance with flight and holiday enquiries",
        "Convenient booking support",
      ],
    },
    {
      id: "important-information",
      title: "Important Information",
      paragraphs: [
        "Get A Ticket acts as a travel booking assistance and travel enquiry platform. Availability, pricing, airline schedules, hotel rates, and travel conditions are subject to change without notice and are confirmed at the time of booking.",
        "Customers are encouraged to review all travel documentation, visa requirements, baggage policies, and booking terms before travel.",
      ],
    },
    {
      id: "contact-us",
      title: "Contact Us",
      paragraphs: [
        "If you have questions about flights, holidays, or travel arrangements, our team is here to help.",
      ],
    },
  ] satisfies AboutSection[],
};

export const SERVICE_ITEMS = [
  {
    label: "International and domestic flights",
    description:
      "Worldwide routes and UK domestic connections, matched to your dates and budget.",
    icon: Plane,
  },
  {
    label: "Holiday packages",
    description:
      "Curated package holidays with flights, stays, and transfers in one enquiry.",
    icon: Palmtree,
  },
  {
    label: "City breaks",
    description:
      "Short urban escapes to Europe and beyond — culture, dining, and weekend getaways.",
    icon: Building2,
  },
  {
    label: "Family holidays",
    description:
      "Trips designed around families, with flexible dates and room configurations.",
    icon: Users,
  },
  {
    label: "Beach holidays",
    description:
      "Sun-soaked destinations for couples, families, and groups seeking a coastal break.",
    icon: Globe2,
  },
  {
    label: "Last-minute travel deals",
    description:
      "Urgent getaways and spontaneous trips when time is tight but wanderlust wins.",
    icon: Clock3,
  },
  {
    label: "Multi-city itineraries",
    description:
      "Complex routes across multiple destinations, planned with care by our specialists.",
    icon: MapPinned,
  },
  {
    label: "Group travel enquiries",
    description:
      "Coordinated travel for groups — events, celebrations, and shared adventures.",
    icon: UsersRound,
  },
] as const;

export const WHY_CHOOSE_ITEMS = [
  {
    title: "UK-focused travel assistance",
    description:
      "Dedicated support for UK travellers planning domestic and international journeys.",
    icon: Globe2,
    className: "",
  },
  {
    title: "Wide range of travel options",
    description:
      "Flights, packages, city breaks, beach holidays, and group travel from trusted suppliers.",
    icon: Sparkles,
    className: "",
  },
  {
    title: "Friendly customer support",
    description:
      "Real people ready to help with enquiries, booking requests, and travel questions.",
    icon: Headphones,
    className: "",
  },
  {
    title: "Flight & holiday enquiries",
    description:
      "Specialists who help you explore options and find fares that suit your plans.",
    icon: Plane,
    className: "md:col-span-2",
  },
  {
    title: "Convenient booking support",
    description:
      "A straightforward process from first enquiry through to confirmation.",
    icon: BadgeCheck,
    className: "",
  },
] as const;
