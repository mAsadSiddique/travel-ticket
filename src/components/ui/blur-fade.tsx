"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BlurFade({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 16,
  className,
  inViewMargin = "-60px",
  static: isStatic = false,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  inViewMargin?: string;
  /** Skip entrance animation — use for above-the-fold content on initial load. */
  static?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: inViewMargin as never });

  if (isStatic) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
