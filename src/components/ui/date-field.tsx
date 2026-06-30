"use client";

import { useMemo, useState } from "react";
import { format, isValid } from "date-fns";
import { CalendarDays, ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/** Parse YYYY-MM-DD as local calendar date (avoids UTC timezone shifts). */
export function parseLocalDate(value: string): Date | undefined {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return undefined;
  const date = new Date(year, month - 1, day);
  return isValid(date) ? date : undefined;
}

export function toLocalISODate(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function todayLocalISO(): string {
  return format(new Date(), "yyyy-MM-dd");
}

function initialMonth(value: string, min?: string): Date {
  return (
    parseLocalDate(value) ??
    (min ? parseLocalDate(min) : undefined) ??
    new Date()
  );
}

export function DateField({
  label,
  value,
  onChange,
  disabled = false,
  min,
  compact = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  min?: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [month, setMonth] = useState<Date>(() => initialMonth(value, min));

  const selected = useMemo(() => parseLocalDate(value), [value]);
  const minDate = useMemo(
    () => (min ? parseLocalDate(min) : undefined),
    [min]
  );
  const disabledDays = useMemo(
    () => (minDate ? { before: minDate } : undefined),
    [minDate]
  );

  const handleOpenChange = (next: boolean) => {
    if (disabled) return;
    if (next) {
      setMonth(initialMonth(value, min));
    }
    setOpen(next);
  };

  return (
    <Popover
      open={open && !disabled}
      onOpenChange={handleOpenChange}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            "group flex w-full flex-col items-start text-left outline-none",
            compact ? "gap-0 py-0" : "gap-0.5 rounded-xl px-1 py-1",
            disabled && "cursor-not-allowed opacity-60"
          )}
        >
          <span
            className={cn(
              "flex items-center gap-1 font-semibold uppercase tracking-wide text-ink/50",
              compact ? "text-[10px]" : "text-[11px]"
            )}
          >
            <CalendarDays className={compact ? "h-2.5 w-2.5" : "h-3 w-3"} />{" "}
            {label}
          </span>
          <span className="flex w-full items-center justify-between gap-2">
            <span
              className={cn(
                "board-text font-semibold",
                compact ? "text-sm" : "text-xl",
                disabled ? "text-ink/25" : "text-ink"
              )}
            >
              {selected ? format(selected, "d MMM yyyy") : "Select date"}
            </span>
            <ChevronDown
              className={cn(
                "shrink-0 text-ink/40 transition-transform group-data-[state=open]:rotate-180",
                compact ? "h-3.5 w-3.5" : "h-4 w-4"
              )}
            />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          month={month}
          onMonthChange={setMonth}
          selected={selected}
          onSelect={(date) => {
            if (!date) return;
            onChange(toLocalISODate(date));
            setOpen(false);
          }}
          disabled={disabledDays}
        />
      </PopoverContent>
    </Popover>
  );
}
