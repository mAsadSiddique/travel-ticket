"use client";

import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { ChevronDown, Minus, Plus, Users } from "lucide-react";

export type PassengerCounts = { adults: number; children: number; infants: number };

const ROWS: { key: keyof PassengerCounts; label: string; hint: string; min: number }[] = [
  { key: "adults", label: "Adults", hint: "Age 12+", min: 1 },
  { key: "children", label: "Children", hint: "Age 2–11", min: 0 },
  { key: "infants", label: "Infants", hint: "Under 2", min: 0 },
];

export function PassengerSelector({
  value,
  onChange,
}: {
  value: PassengerCounts;
  onChange: (v: PassengerCounts) => void;
}) {
  const [open, setOpen] = useState(false);
  const total = value.adults + value.children + value.infants;

  function update(key: keyof PassengerCounts, delta: number, min: number) {
    onChange({ ...value, [key]: Math.max(min, Math.min(9, value[key] + delta)) });
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="group flex w-full flex-col items-start gap-0.5 rounded-xl px-1 py-1 text-left outline-none"
        >
          <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-ink/50">
            <Users className="h-3 w-3" /> Travellers
          </span>
          <span className="flex w-full items-center justify-between">
            <span className="board-text text-xl font-semibold text-ink">
              {total} <span className="font-sans text-sm font-normal text-ink/60">passenger{total !== 1 ? "s" : ""}</span>
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-ink/40 transition-transform group-data-[state=open]:rotate-180" />
          </span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={14}
          className="z-50 w-[300px] rounded-2xl border border-line bg-white p-4 shadow-2xl shadow-ink/10 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          <div className="flex flex-col gap-4">
            {ROWS.map((row) => (
              <div key={row.key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{row.label}</p>
                  <p className="text-xs text-ink/45">{row.hint}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => update(row.key, -1, row.min)}
                    disabled={value[row.key] <= row.min}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-kingfisher hover:text-kingfisher disabled:opacity-30"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="board-text w-4 text-center text-sm font-semibold">
                    {value[row.key]}
                  </span>
                  <button
                    type="button"
                    onClick={() => update(row.key, 1, row.min)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink/60 transition-colors hover:border-kingfisher hover:text-kingfisher"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 w-full rounded-full bg-ink py-2.5 text-sm font-semibold text-cloud transition-colors hover:bg-ink-2"
          >
            Done
          </button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
