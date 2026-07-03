export type Airport = {
  code: string;
  city: string;
  country: string;
  airport: string;
};

export const airports: Airport[] = [
  { code: "LHR", city: "London", country: "United Kingdom", airport: "Heathrow" },
  { code: "LGW", city: "London", country: "United Kingdom", airport: "Gatwick" },
  { code: "MAN", city: "Manchester", country: "United Kingdom", airport: "Manchester Airport" },
  { code: "EDI", city: "Edinburgh", country: "United Kingdom", airport: "Edinburgh Airport" },
  { code: "BHX", city: "Birmingham", country: "United Kingdom", airport: "Birmingham Airport" },
  { code: "GLA", city: "Glasgow", country: "United Kingdom", airport: "Glasgow Airport" },
  { code: "BRS", city: "Bristol", country: "United Kingdom", airport: "Bristol Airport" },
  { code: "LPL", city: "Liverpool", country: "United Kingdom", airport: "John Lennon Airport" },
  { code: "NCL", city: "Newcastle", country: "United Kingdom", airport: "Newcastle Airport" },
  { code: "BFS", city: "Belfast", country: "United Kingdom", airport: "Belfast International" },
  { code: "CDG", city: "Paris", country: "France", airport: "Charles de Gaulle" },
  { code: "JFK", city: "New York", country: "United States", airport: "John F. Kennedy" },
  { code: "DXB", city: "Dubai", country: "UAE", airport: "Dubai International" },
  { code: "BCN", city: "Barcelona", country: "Spain", airport: "El Prat" },
  { code: "FCO", city: "Rome", country: "Italy", airport: "Fiumicino" },
];

export type Destination = {
  name: string;
  country: string;
  price: number;
  image: string;
  tag: string;
};

export const destinations: Destination[] = [
  { name: "Edinburgh", country: "Scotland", price: 39, tag: "Castles & whisky", image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?q=80&w=1200&auto=format&fit=crop" },
  { name: "Barcelona", country: "Spain", price: 54, tag: "Sun & tapas", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1200&auto=format&fit=crop" },
  { name: "Dubai", country: "UAE", price: 289, tag: "Desert luxury", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop" },
  { name: "Paris", country: "France", price: 49, tag: "City of light", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop" },
  { name: "Rome", country: "Italy", price: 65, tag: "Ancient streets", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop" },
  { name: "New York", country: "USA", price: 349, tag: "Skyline & lights", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop" },
  { name: "Lisbon", country: "Portugal", price: 47, tag: "Coastal pastels", image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?q=80&w=1200&auto=format&fit=crop" },
  { name: "Reykjavik", country: "Iceland", price: 119, tag: "Northern lights", image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=1200&auto=format&fit=crop" },
];

export type Airline = { name: string; code: string };

export const airlineLogoUrl = (code: string) =>
  `https://images.kiwi.com/airlines/64/${code}.png`;

export const airlines: Airline[] = [
  { name: "British Airways", code: "BA" },
  { name: "EgyptAir", code: "MS" },
  { name: "Emirates", code: "EK" },
  { name: "Ethiopian Airlines", code: "ET" },
  { name: "Etihad Airways", code: "EY" },
  { name: "Malaysia Airlines", code: "MH" },
  { name: "Qatar Airways", code: "QR" },
  { name: "RwandAir", code: "WB" },
  { name: "Singapore Airlines", code: "SQ" },
  { name: "Thai Airways", code: "TG" },
  { name: "Virgin Atlantic", code: "VS" },
  { name: "easyJet", code: "U2" },
  { name: "Ryanair", code: "FR" },
  { name: "Jet2", code: "LS" },
  { name: "Wizz Air", code: "W6" },
  { name: "TUI Airways", code: "BY" },
];

export type Tour = {
  name: string;
  location: string;
  days: number;
  nights: number;
  rating: number;
  price: number;
  image: string;
};

export const tours: Tour[] = [
  { name: "Highland Explorer", location: "Scottish Highlands", days: 5, nights: 4, rating: 4.9, price: 489, image: "https://images.unsplash.com/photo-1453747063559-36695c8771bd?q=80&w=1200&auto=format&fit=crop" },
  { name: "Andalucian Road Trip", location: "Southern Spain", days: 7, nights: 6, rating: 4.8, price: 712, image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1200&auto=format&fit=crop" },
  { name: "Tuscan Hills & Vineyards", location: "Tuscany, Italy", days: 6, nights: 5, rating: 4.9, price: 845, image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1200&auto=format&fit=crop" },
  { name: "Arabian Desert Escape", location: "Dubai & Abu Dhabi", days: 4, nights: 3, rating: 4.7, price: 990, image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop" },
  { name: "Icelandic Ring Road", location: "Iceland", days: 8, nights: 7, rating: 5.0, price: 1340, image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop" },
  { name: "Manhattan Long Weekend", location: "New York, USA", days: 4, nights: 3, rating: 4.6, price: 1120, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop" },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  { name: "Sophie Turner", location: "Manchester, UK", rating: 5, quote: "Booked our family trip to Lisbon in under five minutes. The passenger selector made adding the kids painless, and the price was exactly what we saw at checkout.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" },
  { name: "James Whitfield", location: "Leeds, UK", rating: 5, quote: "Get A Ticket found a Jet2 fare that beat every comparison site I'd tried that week. Genuinely the easiest booking flow I've used.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop" },
  { name: "Amara Okafor", location: "London, UK", rating: 4, quote: "The Highland tour was beautifully organised — clear itinerary, great guides, and support replied within minutes when our connecting flight shifted.", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop" },
  { name: "Tom Reilly", location: "Bristol, UK", rating: 5, quote: "Return flights to Dubai for the whole family, infant seat sorted, no hidden fees. Will absolutely use Get A Ticket again.", avatar: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1200&auto=format&fit=crop" },
  { name: "Priya Shah", location: "Birmingham, UK", rating: 5, quote: "Loved being able to compare every UK airline in one search instead of opening ten tabs. Saved both time and money.", avatar: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=1200&auto=format&fit=crop" },
];

export const stats = [
  { value: 1600, suffix: "+", label: "Travellers booked" },
  { value: 214, suffix: "", label: "Destinations covered" },
  { value: 4.9, suffix: "★", label: "Average rating" },
  { value: 16, suffix: "", label: "Airline partners" },
];
