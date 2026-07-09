"use client";

import { useEffect, useState } from "react";
import { todayLocalISO } from "@/components/elements/date-field";

/** Returns today's local date after mount to avoid SSR/client timezone mismatches. */
export function useClientTodayISO() {
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(todayLocalISO());
  }, []);

  return today;
}
