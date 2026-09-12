"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";
import type { SkillCategory } from "@/types";

const categoryOrder: SkillCategory[] = [
  "Desenvolvimento",
  "Front-end",
  "Back-end",
  "Banco de Dados",
  "Web / APIs",
  "Inteligência Artificial",
  "Criativo",
  "Marketing",
];

export default function Skills() {
  const groups = categoryOrder
    .map((category) => ({
      category,
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container-content">
        <SectionHeading
          title="Skills"
          description="Tecnologias e ferramentas que utilizo no dia a dia de estudo e desenvolvimento."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
              className="rounded-2xl border border-white/[0.07] bg-base-900/50 p-5 hover:border-white/[0.14] transition-colors"
            >
              <h3 className="text-sm font-medium text-ink-500 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={`${group.category}-${skill.name}`}
                    className="rounded-full border border-white/[0.09] bg-white/[0.02] px-3 py-1.5 text-sm text-ink-100"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
