# Skyward — UK Travel Agency Landing Page

A premium Next.js 16 + Tailwind v4 landing page for a UK flight & tours booking agency.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Design system

- **Theme:** "British sky, departures board" — warm cloud-white background, deep navy ink,
  kingfisher blue + amber sun accents, dashed flight-path rules as the signature motif.
- **Type:** Fraunces (display/serif headlines), Inter (body), Space Grotesk (fares, stats,
  airport codes — the "departures board" numerals).
- **Components:** hand-built shadcn-style primitives (Button, Badge) on Radix UI primitives
  (Popover, Tabs, Select), plus Magic-UI-style effects (BlurFade scroll reveals, NumberTicker,
  Marquee) — all self-contained, no external registry calls needed.

## Structure

```
src/
  app/                 layout, globals.css, page.tsx
  components/ui/       Button, Badge, BlurFade, NumberTicker, Marquee,
                        AirportCombobox, PassengerSelector, DateField
  components/sections/ Navbar, Hero, BookingCard, Destinations, Airlines,
                        Tours, WhyChooseUs, Testimonials, Footer
  data/travel.ts        mock airports, destinations, airlines, tours, testimonials
```

## Next steps to go live

- Wire `BookingCard`'s submit handler to a real flight-search API (the UI state for
  trip type, origin/destination, dates, passengers, and cabin class is already structured
  for this).
- Replace mock data in `src/data/travel.ts` with real airline/tour/destination feeds.
- Swap Unsplash/pravatar image URLs for your own licensed assets.
