"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal, social, contactMessage } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    try {
      const endpoint = formspreeEndpoint || "/api/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Falha no envio");

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-ink-100 tracking-tight">
              {contactMessage.title}
            </h2>
            <p className="mt-4 text-ink-300 leading-relaxed max-w-md">
              {contactMessage.description}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-ink-100 hover:text-accent-green transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08]">
                  <Mail size={16} />
                </span>
                {personal.email}
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ink-100 hover:text-accent-green transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08]">
                  <MessageCircle size={16} />
                </span>
                {personal.phoneDisplay}
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            onSubmit={handleSubmit}
            className="glass-panel rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-ink-500 mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl bg-base-900 border border-white/[0.08] px-4 py-3 text-ink-100 text-sm placeholder:text-ink-700 focus:border-accent-green/50 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-ink-500 mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl bg-base-900 border border-white/[0.08] px-4 py-3 text-ink-100 text-sm placeholder:text-ink-700 focus:border-accent-green/50 transition-colors"
                  placeholder="voce@empresa.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm text-ink-500 mb-2">
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-xl bg-base-900 border border-white/[0.08] px-4 py-3 text-ink-100 text-sm placeholder:text-ink-700 focus:border-accent-green/50 transition-colors"
                placeholder="Opcional"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-ink-500 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-xl bg-base-900 border border-white/[0.08] px-4 py-3 text-ink-100 text-sm placeholder:text-ink-700 focus:border-accent-green/50 transition-colors resize-none"
                placeholder="Conte um pouco sobre a oportunidade"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 justify-center rounded-full bg-ink-100 text-base-950 px-6 py-3 text-sm font-semibold hover:bg-white transition-colors disabled:opacity-60"
            >
              <Send size={15} />
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-accent-green">
                <CheckCircle2 size={16} />
                Mensagem enviada com sucesso. Obrigado pelo contato!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} />
                Não foi possível enviar agora. Tente novamente pelo e-mail ou WhatsApp acima.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
