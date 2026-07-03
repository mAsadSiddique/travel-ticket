import type { ComponentProps } from "react";
import { cn } from "@/utils/utils";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[9rem] w-full resize-y rounded-xl border border-line bg-cloud/40 px-3 py-2.5 text-sm text-ink outline-none placeholder:text-ink/40 focus-visible:border-kingfisher focus-visible:bg-white disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
