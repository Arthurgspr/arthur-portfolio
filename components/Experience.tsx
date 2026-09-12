"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container-content">
        <SectionHeading
          title="Experiência"
          description="Vivência prática aplicando tecnologia e análise a um contexto de negócio real."
        />

        <div className="space-y-5">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              className="glass-panel rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-accent-green">
                    <Briefcase size={17} />
                  </span>
                  <div>
                    <h3 className="text-ink-100 font-medium text-lg">{item.role}</h3>
                    <p className="text-ink-500 text-sm mt-0.5">{item.company}</p>
                  </div>
                </div>
                <span className="text-sm text-ink-700 md:pt-2">{item.period}</span>
              </div>

              <p className="mt-5 text-ink-300 leading-relaxed">{item.summary}</p>

              <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {item.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="text-sm text-ink-300 flex items-start gap-2"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-accent-blue shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
