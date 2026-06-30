import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full resize-y rounded-xl border border-line bg-white px-3 py-2 text-sm text-ink transition-colors outline-none placeholder:text-ink/40 focus-visible:border-kingfisher focus-visible:ring-2 focus-visible:ring-kingfisher/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
