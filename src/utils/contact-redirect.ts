import { ROUTES } from "@/constant/routes";

export type FlightSearchEnquiry = {
  fromCode?: string;
  fromCity?: string;
  toCode?: string;
  toCity?: string;
  fromLabel?: string;
  toLabel?: string;
  departDate?: string;
  returnDate?: string;
  tripType?: "return" | "oneway";
  passengers?: number;
  cabin?: string;
};

export function buildContactSearchUrl(enquiry: FlightSearchEnquiry) {
  const params = new URLSearchParams({ from: "search" });

  if (enquiry.fromCode) params.set("fromCode", enquiry.fromCode);
  if (enquiry.fromCity) params.set("fromCity", enquiry.fromCity);
  if (enquiry.toCode) params.set("toCode", enquiry.toCode);
  if (enquiry.toCity) params.set("toCity", enquiry.toCity);
  if (enquiry.fromLabel) params.set("fromLabel", enquiry.fromLabel);
  if (enquiry.toLabel) params.set("toLabel", enquiry.toLabel);
  if (enquiry.departDate) params.set("departDate", enquiry.departDate);
  if (enquiry.returnDate) params.set("returnDate", enquiry.returnDate);
  if (enquiry.tripType) params.set("tripType", enquiry.tripType);
  if (enquiry.passengers) params.set("passengers", String(enquiry.passengers));
  if (enquiry.cabin) params.set("cabin", enquiry.cabin);

  return `${ROUTES.contact}?${params.toString()}`;
}

export function parseFlightSearchEnquiry(
  searchParams: URLSearchParams
): FlightSearchEnquiry | null {
  if (searchParams.get("from") !== "search") return null;

  const passengers = Number(searchParams.get("passengers") || "0");

  return {
    fromCode: searchParams.get("fromCode") || undefined,
    fromCity: searchParams.get("fromCity") || undefined,
    toCode: searchParams.get("toCode") || undefined,
    toCity: searchParams.get("toCity") || undefined,
    fromLabel: searchParams.get("fromLabel") || undefined,
    toLabel: searchParams.get("toLabel") || undefined,
    departDate: searchParams.get("departDate") || undefined,
    returnDate: searchParams.get("returnDate") || undefined,
    tripType:
      searchParams.get("tripType") === "oneway"
        ? "oneway"
        : searchParams.get("tripType") === "return"
          ? "return"
          : undefined,
    passengers: passengers > 0 ? passengers : undefined,
    cabin: searchParams.get("cabin") || undefined,
  };
}

function formatRoute(enquiry: FlightSearchEnquiry) {
  if (enquiry.fromCode && enquiry.toCode) {
    const from = enquiry.fromCity
      ? `${enquiry.fromCity} (${enquiry.fromCode})`
      : enquiry.fromCode;
    const to = enquiry.toCity ? `${enquiry.toCity} (${enquiry.toCode})` : enquiry.toCode;
    return `${from} → ${to}`;
  }

  if (enquiry.fromLabel && enquiry.toLabel) {
    return `${enquiry.fromLabel} → ${enquiry.toLabel}`;
  }

  if (enquiry.toLabel) return enquiry.toLabel;
  if (enquiry.toCode && enquiry.toCity) return `${enquiry.toCity} (${enquiry.toCode})`;

  return "your selected route";
}

export function buildEnquirySubject(enquiry: FlightSearchEnquiry) {
  return `Flight enquiry: ${formatRoute(enquiry)}`;
}

export function buildEnquiryMessage(enquiry: FlightSearchEnquiry) {
  const lines = [
    "Hello, I searched for a route on Get A Ticket and would like help with availability and fares.",
    "",
    `Route: ${formatRoute(enquiry)}`,
  ];

  if (enquiry.tripType) {
    lines.push(`Trip type: ${enquiry.tripType === "return" ? "Return" : "One way"}`);
  }
  if (enquiry.departDate) lines.push(`Departure date: ${enquiry.departDate}`);
  if (enquiry.returnDate && enquiry.tripType !== "oneway") {
    lines.push(`Return date: ${enquiry.returnDate}`);
  }
  if (enquiry.passengers) {
    lines.push(`Passengers: ${enquiry.passengers}`);
  }
  if (enquiry.cabin) lines.push(`Cabin class: ${enquiry.cabin}`);

  lines.push("", "Please contact me with available options. Thank you.");

  return lines.join("\n");
}
