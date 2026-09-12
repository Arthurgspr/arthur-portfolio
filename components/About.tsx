"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutText, personal, languages } from "@/data/portfolio";

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container-content">
        <SectionHeading
          title="Sobre mim"
          description={`Estudante de Sistemas de Informação na UEMG, ${personal.age} anos, baseado em ${personal.location}.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5"
          >
            {aboutText.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-ink-300 leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="glass-panel rounded-2xl p-6 h-fit"
          >
            <h3 className="text-sm font-medium text-ink-500 mb-4">Idiomas</h3>
            <ul className="space-y-3">
              {languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between">
                  <span className="text-ink-100 text-sm">{language.name}</span>
                  <span className="text-ink-500 text-sm">{language.level}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <h3 className="text-sm font-medium text-ink-500 mb-3">Foco atual</h3>
              <ul className="space-y-2">
                {personal.roles.map((role) => (
                  <li key={role} className="text-sm text-ink-300">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
