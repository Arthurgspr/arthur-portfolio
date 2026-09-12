"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, bootcamps } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="formacao" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container-content">
        <SectionHeading
          title="Formação"
          description="Trajetória acadêmica e complementar em tecnologia."
        />

        <div className="relative pl-8 md:pl-10">
          <div
            aria-hidden="true"
            className="absolute left-[9px] md:left-[11px] top-2 bottom-2 w-px bg-white/[0.08]"
          />

          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-8 md:-left-10 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-base-950 border border-accent-green/60 text-accent-green">
                <GraduationCap size={12} />
              </span>
              <p className="text-sm text-ink-700">{item.period}</p>
              <h3 className="mt-1 text-ink-100 font-medium text-lg">{item.course}</h3>
              <p className="text-ink-500 text-sm mt-0.5">
                {item.institution} — {item.location}
              </p>
              <p className="mt-3 text-ink-300 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}

          {bootcamps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (education.length + index) * 0.06 }}
              className="relative pb-2"
            >
              <span className="absolute -left-8 md:-left-10 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-base-950 border border-accent-blue/60 text-accent-blue">
                <Award size={12} />
              </span>
              <p className="text-sm text-ink-700">{item.year}</p>
              <h3 className="mt-1 text-ink-100 font-medium text-lg">{item.title}</h3>
              <p className="text-ink-500 text-sm mt-0.5">
                {item.institution} · {item.status}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
