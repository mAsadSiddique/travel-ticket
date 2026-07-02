import { cn } from "@/utils/utils";

export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={cn("mb-8 max-w-2xl", className)}>
      <h2
        className={cn(
          "font-display text-4xl tracking-tight text-ink sm:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-relaxed text-ink/55 sm:text-lg",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </div>
  );
}
