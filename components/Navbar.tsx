"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/portfolio";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#certificados", label: "Certificados" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-base-950/85 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-ink-100"
          aria-label={`${personal.displayName} — início`}
        >
          Arthur<span className="text-gradient">.</span>Gaspar
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-300 hover:text-ink-100 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-ink-100 hover:border-accent-green/50 hover:text-accent-green transition-colors"
        >
          Contato
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-ink-100"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-base-950/97 backdrop-blur-md">
          <ul className="container-content py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-base text-ink-300 hover:text-ink-100 transition-colors border-b border-white/[0.04]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-ink-100"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
