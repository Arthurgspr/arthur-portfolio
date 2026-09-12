"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-base-900/50 hover:border-white/[0.16] transition-colors",
        featured ? "lg:col-span-2" : ""
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          featured ? "aspect-[16/8]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={project.image}
          alt={`Prévia do projeto ${project.title}`}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 760px" : "(max-width: 1024px) 100vw, 380px"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950/85 via-base-950/10 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-base-950/70 backdrop-blur px-3 py-1 text-xs text-ink-300 border border-white/10">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-lg md:text-xl font-semibold text-ink-100">
          {project.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-ink-300 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] px-2.5 py-1 text-xs text-ink-500"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1.5 text-sm text-ink-100 hover:text-accent-green transition-colors"
          >
            Ver projeto
            <ExternalLink size={14} />
          </a>
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-100 transition-colors"
            aria-label={`Repositório do projeto ${project.title} no GitHub`}
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [featuredProject, ...restProjects] = projects;

  return (
    <section id="projetos" className="py-20 md:py-28 border-t border-white/[0.06]">
      <div className="container-content">
        <SectionHeading
          title="Projetos"
          description="Uma seleção de projetos utilizados para aplicar e demonstrar conceitos de desenvolvimento, dados e sistemas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProject && <ProjectCard project={featuredProject} featured />}
          {restProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
