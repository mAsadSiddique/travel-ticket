import type { ComponentProps } from "react";
import { cn } from "@/utils/utils";

function Input({ className, type = "text", ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-xl border border-line bg-cloud/40 px-3 py-2 text-sm text-ink outline-none placeholder:text-ink/40 focus-visible:border-kingfisher focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
