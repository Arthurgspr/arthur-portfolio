export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  whatsapp: string;
}

export interface PersonalInfo {
  fullName: string;
  displayName: string;
  age: number;
  location: string;
  city: string;
  state: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  role: string;
  tagline: string;
  taglinePt: string;
  supportLine: string;
  vibeLine: string;
  roles: string[];
}

export type SkillCategory =
  | "Desenvolvimento"
  | "Front-end"
  | "Back-end"
  | "Banco de Dados"
  | "Web / APIs"
  | "Inteligência Artificial"
  | "Criativo"
  | "Marketing";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Language {
  name: string;
  level: string;
  isMock?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  summary: string;
}

export type ProjectCategory =
  | "Data Analytics"
  | "Systems"
  | "Cybersecurity"
  | "Academic";

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  isMock: true;
}

export interface EducationEntry {
  institution: string;
  course: string;
  period: string;
  location: string;
  description: string;
}

export interface Bootcamp {
  title: string;
  institution: string;
  year: string;
  status: string;
  isMock: true;
}

export interface Certificate {
  title: string;
  issuer: string;
  isMock: true;
}
