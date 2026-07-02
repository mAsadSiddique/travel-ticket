import { cn } from "@/utils/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70",
        className
      )}
    >
      {children}
    </span>
  );
}
