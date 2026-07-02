"use client";

import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/constant/contact";
import { cn } from "@/utils/utils";
import { MovingBorderButton } from "@/components/elements/moving-border";

type PhoneLinkProps = {
  className?: string;
  onClick?: () => void;
};

export function PhoneLink({ className, onClick }: PhoneLinkProps) {
  return (
    <MovingBorderButton
      as="a"
      href={`tel:${PHONE_TEL}`}
      onClick={onClick}
      borderRadius="9999px"
      duration={3200}
      containerClassName={cn("h-10 shrink-0 sm:h-11", className)}
      className="gap-1.5 px-2.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:gap-2 sm:px-3.5 sm:py-2"
      borderClassName="bg-[radial-gradient(circle,#1e93d8_35%,transparent_65%)]"
      aria-label={`Call us at ${PHONE_DISPLAY}`}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-kingfisher/12 text-kingfisher sm:h-7 sm:w-7"
        aria-hidden
      >
        <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.2} />
      </span>
      <span className="phone-link-neo-number">{PHONE_DISPLAY}</span>
    </MovingBorderButton>
  );
}
