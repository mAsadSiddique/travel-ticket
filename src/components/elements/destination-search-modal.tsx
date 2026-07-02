"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/elements/dialog";
import { Button } from "@/components/elements/button";
import { Input } from "@/components/elements/input";
import { DateField, todayLocalISO } from "@/components/elements/date-field";
import { scrollToSection } from "@/utils/scroll";
import type { Destination, Tour } from "@/constant/location-data";

type DestinationSearchModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destination?: Destination | null;
  tour?: Tour | null;
};

export function DestinationSearchModal({
  open,
  onOpenChange,
  destination = null,
  tour = null,
}: DestinationSearchModalProps) {
  const [departure, setDeparture] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [travelDate, setTravelDate] = useState(() => todayLocalISO());
  const [returnDate, setReturnDate] = useState(() => todayLocalISO());

  const minTravelDate = useMemo(() => todayLocalISO(), [open]);

  useEffect(() => {
    if (!open) return;
    if (destination) {
      setDestinationQuery(`${destination.name}, ${destination.country}`);
      return;
    }
    if (tour) {
      setDestinationQuery(`${tour.name}, ${tour.location}`);
      return;
    }
    setDestinationQuery("");
  }, [open, destination, tour]);

  const handleTravelDateChange = (value: string) => {
    setTravelDate(value);
    setReturnDate((current) => (current < value ? value : current));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onOpenChange(false);
    scrollToSection("search");
  };

  if (!open) return null;

  const title = destination
    ? `Flights to ${destination.name}`
    : tour
      ? `Book ${tour.name}`
      : "Search flights";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-5 sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold sm:text-2xl">{title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Enter your departure"
            value={departure}
            onChange={(event) => setDeparture(event.target.value)}
            required
            aria-label="Departure"
            autoComplete="off"
          />
          <Input
            placeholder="Enter your destination"
            value={destinationQuery}
            onChange={(event) => setDestinationQuery(event.target.value)}
            required
            aria-label="Destination"
            autoComplete="off"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-cloud/40 px-3 py-2">
              <DateField
                compact
                label="Travel date"
                value={travelDate}
                onChange={handleTravelDateChange}
                min={minTravelDate}
              />
            </div>
            <div className="rounded-xl border border-line bg-cloud/40 px-3 py-2">
              <DateField
                compact
                label="Return date"
                value={returnDate}
                onChange={setReturnDate}
                min={travelDate}
              />
            </div>
          </div>
          <div className="flex justify-end pt-1">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="h-11 min-w-[9.5rem] rounded-full px-8 text-base"
            >
              Search now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
