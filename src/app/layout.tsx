import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Skyward — Fly the UK Your Way",
  description:
    "Search flights, browse handpicked tours, and book your next British or international getaway with Skyward.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased bg-cloud text-ink">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
