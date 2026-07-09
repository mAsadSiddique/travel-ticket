"use client";

import * as Tabs from "@radix-ui/react-tabs";
import * as Select from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftRight, Check, ChevronDown, Search } from "lucide-react";
import { airports } from "@/constant/location-data";
import { AirportCombobox } from "@/components/elements/airport-combobox";
import { DateField } from "@/components/elements/date-field";
import { PassengerSelector, type PassengerCounts } from "@/components/elements/passenger-selector";
import { Button } from "@/components/elements/button";
import { useClientTodayISO } from "@/hooks/use-client-today";
import { useSlidingIndicator } from "@/hooks/use-sliding-indicator";
import { buildContactSearchUrl } from "@/utils/contact-redirect";

const CABIN_OPTIONS = ["Economy", "Premium Economy", "Business"];

export function BookingCard() {
  const router = useRouter();
  const today = useClientTodayISO();
  const [tripType, setTripType] = useState<"return" | "oneway">("return");
  const [origin, setOrigin] = useState(airports[0]);
  const [destination, setDestination] = useState(airports[10]);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabin, setCabin] = useState(CABIN_OPTIONS[0]);
  const tripTabsRef = useRef<HTMLDivElement>(null);
  const tripIndicator = useSlidingIndicator(tripType, tripTabsRef);

  useEffect(() => {
    if (!today) return;
    setDepartDate((current) => current || today);
    setReturnDate((current) => current || today);
  }, [today]);

  useEffect(() => {
    if (!departDate || !returnDate) return;
    if (returnDate < departDate) {
      setReturnDate(departDate);
    }
  }, [departDate, returnDate]);

  function swap() {
    setOrigin(destination);
    setDestination(origin);
  }

  function handleSearch() {
    if (!departDate) return;

    const passengerCount =
      passengers.adults + passengers.children + passengers.infants;

    router.push(
      buildContactSearchUrl({
        fromCode: origin.code,
        fromCity: origin.city,
        toCode: destination.code,
        toCity: destination.city,
        departDate,
        returnDate: tripType === "return" ? returnDate : undefined,
        tripType,
        passengers: passengerCount,
        cabin,
      })
    );
  }

  return (
    <div
      id="search"
      className="glass-panel relative w-full rounded-[28px] p-5 shadow-[0_30px_60px_-25px_rgba(12,40,71,0.2)] sm:p-7"
    >
      <Tabs.Root
        value={tripType}
        onValueChange={(v) => setTripType(v as "return" | "oneway")}
        className="flex flex-col gap-5"
      >
        <div className="flex items-center justify-between">
          <Tabs.List ref={tripTabsRef} className="booking-trip-tabs">
            <div
              className="booking-trip-indicator"
              aria-hidden
              style={{
                transform: `translate3d(${tripIndicator.rect.x}px, ${tripIndicator.rect.y}px, 0)`,
                width: tripIndicator.rect.width,
                height: tripIndicator.rect.height,
                opacity: tripIndicator.rect.visible ? 1 : 0,
              }}
            />
            <Tabs.Trigger
              ref={tripIndicator.register("return")}
              value="return"
              className="booking-trip-tab"
            >
              Return
            </Tabs.Trigger>
            <Tabs.Trigger
              ref={tripIndicator.register("oneway")}
              value="oneway"
              className="booking-trip-tab"
            >
              One way
            </Tabs.Trigger>
          </Tabs.List>

          <Select.Root value={cabin} onValueChange={setCabin}>
            <Select.Trigger className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-3.5 py-2 text-xs font-semibold text-ink/70 outline-none">
              <Select.Value />
              <ChevronDown className="h-3.5 w-3.5" />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="z-50 overflow-hidden rounded-xl border border-line bg-white shadow-xl">
                <Select.Viewport className="p-1">
                  {CABIN_OPTIONS.map((c) => (
                    <Select.Item
                      key={c}
                      value={c}
                      className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-ink/80 outline-none data-[highlighted]:bg-cloud-2"
                    >
                      <Select.ItemText>{c}</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check className="h-3.5 w-3.5 text-kingfisher" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* Origin / destination — twin cards, swap overlapping center */}
        <div className="route-pair">
          <div className="route-location-card">
            <AirportCombobox label="From" value={origin} onChange={setOrigin} />
          </div>

          <div className="route-swap-wrap">
            <button
              type="button"
              onClick={swap}
              aria-label="Swap origin and destination"
              className="route-swap-btn"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </button>
          </div>

          <div className="route-location-card">
            <AirportCombobox label="To" value={destination} onChange={setDestination} />
          </div>
        </div>

        {/* Dates + passengers */}
        <div className="relative grid grid-cols-1 gap-4 rounded-2xl border border-line bg-white/60 p-2 sm:grid-cols-3 sm:gap-0">
          <div
            aria-hidden
            className="pointer-events-none absolute top-4 bottom-4 left-1/3 hidden -translate-x-1/2 sm:block"
          >
            <div className="route-rule-vertical-dense h-full" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute top-4 bottom-4 left-2/3 hidden -translate-x-1/2 sm:block"
          >
            <div className="route-rule-vertical-dense h-full" />
          </div>

          <div className="px-3 py-1.5">
            <DateField label="Depart" value={departDate} min={today || undefined} onChange={setDepartDate} />
          </div>
          <div className="border-t border-line px-3 py-1.5 sm:border-t-0">
            <DateField
              label="Return"
              value={returnDate}
              min={departDate}
              disabled={tripType === "oneway"}
              onChange={setReturnDate}
            />
          </div>
          <div className="border-t border-line px-3 py-1.5 sm:border-t-0">
            <PassengerSelector value={passengers} onChange={setPassengers} />
          </div>
        </div>

        <Button
          type="button"
          size="lg"
          variant="primary"
          onClick={handleSearch}
          disabled={!departDate}
          className="h-11 w-full text-base"
        >
          <Search className="h-5 w-5" /> Search Flights
        </Button>
      </Tabs.Root>
    </div>
  );
}
