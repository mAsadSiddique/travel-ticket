"use client";

import * as Popover from "@radix-ui/react-popover";
import { useMemo, useState } from "react";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { airports, type Airport } from "@/constant/location-data";
import { cn } from "@/utils/utils";

export function AirportCombobox({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Airport;
  onChange: (a: Airport) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return airports;
    return airports.filter(
      (a) =>
        a.city.toLowerCase().includes(q) ||
        a.code.toLowerCase().includes(q) ||
        a.airport.toLowerCase().includes(q) ||
        a.country.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="group flex w-full min-w-0 flex-col items-start gap-1 rounded-xl px-1 py-0.5 text-left outline-none"
        >
          <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
            <MapPin className="h-3 w-3 shrink-0" /> {label}
          </span>
          <span className="flex w-full min-w-0 items-center gap-2">
            <span className="board-text shrink-0 text-xl font-semibold leading-none text-ink">
              {value.code}
            </span>
            <span className="min-w-0 truncate font-sans text-sm leading-none text-ink/55">
              {value.city}
            </span>
            <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-ink/35 transition-transform group-data-[state=open]:rotate-180" />
          </span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={14}
          className="z-50 w-[300px] overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-ink/10 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <Search className="h-4 w-4 text-ink/40" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city, airport, or code"
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink/35"
            />
          </div>
          <div className="max-h-72 overflow-y-auto py-1">
            {results.length === 0 && (
              <p className="px-4 py-6 text-center text-sm text-ink/40">
                No airports match &ldquo;{query}&rdquo;
              </p>
            )}
            {results.map((a) => (
              <button
                key={a.code}
                type="button"
                onClick={() => {
                  onChange(a);
                  setOpen(false);
                  setQuery("");
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors hover:bg-cloud-2",
                  value.code === a.code && "bg-cloud-2"
                )}
              >
                <span>
                  <span className="block text-sm font-medium text-ink">
                    {a.city}, {a.country}
                  </span>
                  <span className="block text-xs text-ink/50">{a.airport}</span>
                </span>
                <span className="board-text rounded-md bg-ink/5 px-2 py-1 text-xs font-semibold text-ink/70">
                  {a.code}
                </span>
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
