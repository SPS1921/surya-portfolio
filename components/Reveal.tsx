"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section" | "p" | "h2" | "h3";
};

export function Reveal({ children, delay = 0, y = 26, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Splits a line into words and staggers them up — for big hero statements. */
export function RevealWords({
  text,
  className,
  delay = 0,
  trigger = "view"
}: {
  text: string;
  className?: string;
  delay?: number;
  /** "mount" plays on load (use above the fold); "view" plays when scrolled into view. */
  trigger?: "view" | "mount";
}) {
  const words = text.split(" ");
  const animProps =
    trigger === "mount"
      ? { animate: { y: "0%" } }
      : { whileInView: { y: "0%" }, viewport: { once: true } as const };
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            {...animProps}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.2, 0.8, 0.2, 1]
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
