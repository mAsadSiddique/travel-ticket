"use client";

import { AtSign, Globe2, Mail, MapPin, Phone, PlaneTakeoff, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeedbackRatingModal } from "@/components/ui/feedback-rating-modal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Tours", href: "/#tours" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Airlines", href: "/#airlines" },
];

const DESTINATIONS = ["Edinburgh", "Barcelona", "Dubai", "Paris", "Rome", "New York"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-cloud">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <a href="/" className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-kingfisher text-white">
                <PlaneTakeoff className="h-4 w-4 -rotate-12" />
              </span>
              <span className="font-display text-xl font-semibold">Skyward</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-cloud/55">
              The UK&apos;s honest fare board — compare every airline, book
              tours, and fly with a team who answers the phone.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Globe2, Share2, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cloud/70 transition-colors hover:border-kingfisher hover:text-kingfisher"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-cloud/45">
              Quick links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-cloud/65">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-kingfisher">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-cloud/45">
              Destinations
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-cloud/65">
              {DESTINATIONS.map((d) => (
                <li key={d}>
                  <a href="#destinations" className="transition-colors hover:text-kingfisher">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-cloud/45">
              Stay in the loop
            </h4>
            <ul className="mb-5 flex flex-col gap-3 text-sm text-cloud/65">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-kingfisher" /> 14 Skyline Way, London EC1
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-kingfisher" />
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-kingfisher">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-kingfisher" /> hello@skyward.co.uk
              </li>
            </ul>
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cloud placeholder:text-cloud/40 outline-none focus:border-kingfisher"
              />
              <Button type="submit" variant="primary" size="sm" className="shrink-0">
                Join
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cloud/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Skyward Travel Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-cloud/70">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-cloud/70">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-cloud/70">
              ATOL Protection
            </a>
            <FeedbackRatingModal
              trigger={
                <button
                  type="button"
                  className="transition-colors hover:text-cloud/70"
                >
                  Give feedback
                </button>
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
