import { cn } from "@/utils/utils";
import type { ReactNode } from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-line bg-white p-5 shadow-[0_12px_40px_-28px_rgba(12,40,71,0.35)] transition duration-300 hover:border-kingfisher/25 hover:shadow-[0_20px_50px_-28px_rgba(30,147,216,0.35)]",
        className
      )}
    >
      {header}
      <div className="transition duration-300 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
          {title}
        </div>
        <div className="mt-2 text-sm leading-relaxed text-ink/60">{description}</div>
      </div>
    </div>
  );
}
