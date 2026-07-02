"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import type { ComponentProps } from "react";
import { cn } from "@/utils/utils";
import { buttonVariants } from "@/components/elements/button";

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: ComponentProps<typeof DayPicker>) {
  const defaults = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      navLayout="around"
      className={cn("p-3", className)}
      classNames={{
        ...defaults,
        months: cn("flex flex-col gap-4", defaults.months),
        month: cn("relative flex w-full flex-col gap-2", defaults.month),
        month_caption: cn(
          "relative flex h-9 w-full items-center justify-center px-10",
          defaults.month_caption
        ),
        caption_label: cn("text-sm font-semibold text-ink", defaults.caption_label),
        button_previous: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "absolute left-0 top-0 z-20 h-8 w-8",
          defaults.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "absolute right-0 top-0 z-20 h-8 w-8",
          defaults.button_next
        ),
        month_grid: cn("w-full border-collapse", defaults.month_grid),
        weekdays: cn("flex", defaults.weekdays),
        weekday: cn(
          "w-9 text-center text-[0.7rem] font-medium uppercase tracking-wide text-mist",
          defaults.weekday
        ),
        week: cn("mt-1 flex w-full", defaults.week),
        day: cn(
          "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20",
          defaults.day
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "relative z-10 h-9 w-9 p-0 font-normal text-ink hover:bg-cloud-2",
          defaults.day_button
        ),
        selected: cn(
          "rounded-md bg-kingfisher text-white hover:bg-kingfisher hover:text-white focus:bg-kingfisher focus:text-white",
          defaults.selected
        ),
        today: cn("rounded-md bg-cloud-2 font-semibold text-ink", defaults.today),
        outside: cn(
          "text-ink/45 aria-selected:bg-kingfisher/20 aria-selected:text-ink",
          defaults.outside
        ),
        disabled: cn(
          "[&_button]:cursor-not-allowed [&_button]:bg-cloud/60 [&_button]:text-ink/55 [&_button]:hover:bg-cloud/60 [&_button]:hover:text-ink/55",
          defaults.disabled
        ),
        hidden: cn("invisible", defaults.hidden),
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: chevronClassName, ...chevronProps }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("h-4 w-4", chevronClassName)} {...chevronProps} />
          ) : (
            <ChevronRight className={cn("h-4 w-4", chevronClassName)} {...chevronProps} />
          ),
        ...components,
      }}
      {...props}
    />
  );
}
