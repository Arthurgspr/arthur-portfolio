import { Github, Linkedin, Mail } from "lucide-react";
import { personal, social } from "@/data/portfolio";
import { currentYear } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-ink-100 font-medium">
            {personal.displayName}
          </p>
          <p className="text-sm text-ink-700 mt-1">
            Building with code, data &amp; curiosity.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Arthur Gaspar de Souza"
            className="text-ink-500 hover:text-ink-100 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Arthur Gaspar de Souza"
            className="text-ink-500 hover:text-ink-100 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Enviar e-mail para Arthur Gaspar de Souza"
            className="text-ink-500 hover:text-ink-100 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-ink-700">
          © {currentYear()} {personal.displayName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
