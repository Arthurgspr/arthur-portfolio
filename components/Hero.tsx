"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, MapPin } from "lucide-react";
import TypingRotator from "./TypingRotator";
import { personal, profileImage, resumeUrl } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28"
    >
      {/* Glow de fundo sutil — apenas um elemento de destaque, comportado */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-accent-glow"
      />

      <div className="container-content relative grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-ink-500 text-sm md:text-base mb-4">Olá, eu sou</p>

          <h1 className="font-display font-semibold tracking-tight text-ink-100 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            {personal.displayName}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-ink-300 min-h-[1.6em]">
            <TypingRotator roles={personal.roles} />
          </p>

          <p className="mt-6 text-lg sm:text-xl text-ink-100 font-medium">
            {personal.tagline}
          </p>
          <p className="mt-1 text-sm text-ink-500">{personal.taglinePt}</p>

          <p className="mt-6 text-ink-300 leading-relaxed max-w-lg">
            {personal.supportLine}
          </p>

          <p className="mt-3 text-sm text-ink-700">{personal.vibeLine}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full bg-ink-100 text-base-950 px-6 py-3 text-sm font-semibold hover:bg-white transition-colors"
            >
              Ver projetos
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-medium text-ink-100 hover:border-accent-blue/50 hover:text-accent-blue transition-colors"
            >
              <Download size={16} />
              Baixar currículo
            </a>
            <a
              href="#contato"
              className="text-sm text-ink-300 hover:text-accent-green transition-colors underline underline-offset-4 decoration-white/20"
            >
              Entre em contato
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-ink-700 text-sm">
            <MapPin size={15} />
            <span>Porciúncula — RJ, Brasil</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm md:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent-green/20 via-transparent to-accent-blue/20 blur-2xl"
          />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-card glass-panel">
            <Image
              src={profileImage}
              alt={`Foto profissional de ${personal.displayName}`}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-950/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center justify-center h-10 w-10 rounded-full border border-white/10 text-ink-500 hover:text-ink-100 hover:border-white/25 transition-colors"
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
