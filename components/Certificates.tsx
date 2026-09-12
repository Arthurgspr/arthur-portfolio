"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certificates } from "@/data/portfolio";

export default function Certificates() {
  const hasCertificates = certificates.length > 0;

  return (
    <section id="certificados" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container-content">
        <SectionHeading
          title="Certificados"
          description="Certificações e cursos complementares à formação acadêmica."
        />

        {hasCertificates ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-base-900/50 p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-accent-green">
                  <BadgeCheck size={17} />
                </span>
                <div>
                  <h3 className="text-ink-100 font-medium">{certificate.title}</h3>
                  <p className="text-ink-500 text-sm mt-1">{certificate.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-dashed border-white/[0.1] py-16 px-6">
            <Sparkles className="text-ink-700 mb-3" size={22} />
            <p className="text-ink-500">Novas certificações em breve.</p>
          </div>
        )}
      </div>
    </section>
  );
}
