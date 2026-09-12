"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  id?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-10 md:mb-14 ${align === "center" ? "text-center mx-auto max-w-xl" : ""}`}
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink-100 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-500 text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
