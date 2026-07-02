"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/utils";

export type HoverEffectItem = {
  title: string;
  description: string;
  link?: string;
  icon?: ReactNode;
};

export function HoverEffect({
  items,
  className,
}: {
  items: HoverEffectItem[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => {
        const content = (
          <>
            <AnimatePresence mode="popLayout">
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-kingfisher/10"
                  layoutId="hoverBackground"
                  initial={false}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 500,
                      damping: 38,
                      mass: 0.6,
                    },
                  }}
                />
              )}
            </AnimatePresence>
            <HoverCard>
              {item.icon ? (
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kingfisher/10 text-kingfisher ring-1 ring-kingfisher/10 transition-colors duration-150 group-hover:bg-kingfisher group-hover:text-cloud">
                  {item.icon}
                </div>
              ) : null}
              <HoverCardTitle>{item.title}</HoverCardTitle>
              <HoverCardDescription>{item.description}</HoverCardDescription>
            </HoverCard>
          </>
        );

        const sharedProps = {
          className: "group relative block h-full w-full p-2",
          onMouseEnter: () => setHoveredIndex(idx),
          onMouseLeave: () => setHoveredIndex(null),
        };

        if (item.link) {
          return (
            <a href={item.link} key={item.title} {...sharedProps}>
              {content}
            </a>
          );
        }

        return (
          <div key={item.title} {...sharedProps}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export function HoverCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-line bg-white p-4 transition-colors duration-150 group-hover:border-kingfisher/25",
        className
      )}
    >
      <div className="relative z-50 p-2">{children}</div>
    </div>
  );
}

export function HoverCardTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h4
      className={cn(
        "mt-2 font-display text-lg tracking-tight text-ink",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function HoverCardDescription({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "mt-4 text-sm leading-relaxed tracking-wide text-ink/60",
        className
      )}
    >
      {children}
    </p>
  );
}
