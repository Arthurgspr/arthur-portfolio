import type {
  PersonalInfo,
  SocialLinks,
  Skill,
  Language,
  Experience,
  Project,
  EducationEntry,
  Bootcamp,
  Certificate,
} from "@/types";

/**
 * ARQUIVO CENTRAL DE DADOS
 * --------------------------------------------------------------
 * Praticamente todo o conteúdo do site vem daqui. Para atualizar
 * o portfólio, edite os valores abaixo — não é necessário mexer
 * nos componentes em /components.
 *
 * Campos marcados com "// MOCK DATA" são dados de exemplo e
 * devem ser substituídos pelas informações reais antes de publicar
 * o site em produção.
 * --------------------------------------------------------------
 */

export const personal: PersonalInfo = {
  fullName: "Arthur Gaspar de Souza",
  displayName: "Arthur Gaspar de Souza",
  age: 19,
  location: "Porciúncula, Rio de Janeiro, Brasil",
  city: "Porciúncula",
  state: "RJ",
  country: "Brasil",
  phoneDisplay: "(22) 99767-3405",
  phoneRaw: "5522997673405",
  email: "arthurgaspardesouza@gmail.com",
  role: "Desenvolvedor • Data & Systems • Cybersecurity",
  tagline: "Building with code, data and AI.",
  taglinePt: "Construindo com código, dados e IA.",
  supportLine:
    "Estudante de Sistemas de Informação explorando desenvolvimento de software, análise de dados, cybersecurity e programação assistida por IA.",
  vibeLine: "Vibe coding, structured thinking.",
  roles: [
    "Analista de Dados",
    "Analista de Sistemas",
    "Software Developer",
    "Cybersecurity Enthusiast",
  ],
};

export const social: SocialLinks = {
  // MOCK DATA — substituir pelo GitHub real
  github: "https://github.com/Arthurgspr",
  // MOCK DATA — substituir pelo LinkedIn real
  linkedin: "https://www.linkedin.com/in/arthur-gaspar-de-souza-085b5b428/",
  email: "arthurgaspardesouza@gmail.com",
  whatsapp: "https://wa.me/5522997673405",
};

export const resumeUrl = "/Arthur-Gaspar-CV.pdf"; // MOCK — substituir pelo currículo real em PDF
export const profileImage = "/images/arthur-profile.webp"; // MOCK — substituir pela foto profissional real
export const ogImage = "/og-image.png"; // MOCK — substituir pela imagem de Open Graph real

export const aboutText = {
  paragraphs: [
    "Sempre tive interesse por computadores e tecnologia. Atualmente curso o 4º período de Sistemas de Informação na UEMG, campus Carangola, com foco em desenvolvimento de software, dados e fundamentos de sistemas.",
    "Tenho curiosidade por entender como sistemas funcionam, como dados podem gerar decisões e como a tecnologia pode resolver problemas reais. Esse interesse se estende a programação, análise de dados, inteligência artificial e cybersecurity.",
    "Utilizo ferramentas de IA como ChatGPT, Claude e Gemini para acelerar pesquisa, prototipação, desenvolvimento e aprendizado — sem que isso substitua o entendimento técnico por trás de cada solução.",
  ],
};

export const skills: Skill[] = [
  { name: "C++", category: "Desenvolvimento" },
  { name: "Python", category: "Desenvolvimento" },
  { name: "TypeScript", category: "Desenvolvimento" },
  { name: "JavaScript", category: "Desenvolvimento" },

  { name: "HTML", category: "Front-end" },
  { name: "CSS", category: "Front-end" },
  { name: "Next.js", category: "Front-end" },

  { name: "C++", category: "Back-end" },
  { name: "TypeScript", category: "Back-end" },
  { name: "Flask", category: "Back-end" },

  { name: "MySQL", category: "Banco de Dados" },

  { name: "HTTP", category: "Web / APIs" },
  { name: "REST APIs", category: "Web / APIs" },

  { name: "ChatGPT", category: "Inteligência Artificial" },
  { name: "Claude", category: "Inteligência Artificial" },
  { name: "Gemini", category: "Inteligência Artificial" },

  { name: "Photoshop", category: "Criativo" },
  { name: "Canva", category: "Criativo" },
  { name: "CapCut", category: "Criativo" },

  { name: "Meta Ads", category: "Marketing" },
];

export const languages: Language[] = [
  { name: "Português", level: "Nativo" },
  // MOCK DATA — nível de inglês estimado, ajustar se necessário
  { name: "Inglês", level: "Intermediário", isMock: true },
];

export const experience: Experience[] = [
  {
    company: "Mazotto Embalagens & Gráfica",
    role: "Gerente de Marketing e Analista de Leads",
    period: "~1 mês",
    summary:
      "Atuação em marketing digital e análise de leads, com foco em apoiar a estratégia comercial da empresa através de dados e criativos.",
    responsibilities: [
      "Criação de criativos para campanhas de marketing",
      "Análise de leads gerados pelas campanhas",
      "Acompanhamento de campanhas digitais",
      "Apoio na definição da estratégia de marketing",
      "Acompanhamento do desempenho dos anúncios",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "dashboard-analise-dados",
    title: "Dashboard de Análise de Dados",
    description:
      "Dashboard para análise e visualização de indicadores utilizando dados estruturados, com foco em leitura clara de métricas e apoio à tomada de decisão.",
    technologies: ["Python", "Flask", "MySQL", "Pandas"],
    category: "Data Analytics",
    image: "/images/projects/project-01.webp", // MOCK LINK
    liveUrl: "#", // MOCK LINK
    githubUrl: "#", // MOCK LINK
    featured: true,
    isMock: true,
  },
  {
    slug: "sistema-de-gestao",
    title: "Sistema de Gestão",
    description:
      "Aplicação web para gerenciamento de registros, usuários e informações de um sistema, com estrutura pensada para escalar novas funcionalidades.",
    technologies: ["Next.js", "TypeScript", "MySQL"],
    category: "Systems",
    image: "/images/projects/project-02.webp", // MOCK LINK
    liveUrl: "#", // MOCK LINK
    githubUrl: "#", // MOCK LINK
    isMock: true,
  },
  {
    slug: "cybersecurity-toolkit",
    title: "Cybersecurity Toolkit",
    description:
      "Ferramenta experimental desenvolvida em Python para estudar conceitos relacionados a segurança e análise de sistemas em ambiente controlado.",
    technologies: ["Python"],
    category: "Cybersecurity",
    image: "/images/projects/project-03.webp", // MOCK LINK
    liveUrl: "#", // MOCK LINK
    githubUrl: "#", // MOCK LINK
    isMock: true,
  },
  {
    slug: "academic-cpp-system",
    title: "Academic C++ System",
    description:
      "Sistema desenvolvido em C++ para aplicação de conceitos de programação, orientação a objetos e estruturação de dados em contexto acadêmico.",
    technologies: ["C++"],
    category: "Academic",
    image: "/images/projects/project-04.webp", // MOCK LINK
    liveUrl: "#", // MOCK LINK
    githubUrl: "#", // MOCK LINK
    isMock: true,
  },
];

export const education: EducationEntry[] = [
  {
    institution: "UEMG — Universidade do Estado de Minas Gerais",
    course: "Sistemas de Informação",
    period: "4º período",
    location: "Carangola — MG",
    description:
      "Formação voltada para desenvolvimento de software, banco de dados, sistemas de informação e fundamentos de tecnologia.",
  },
];

export const bootcamps: Bootcamp[] = [
  {
    // MOCK DATA — substituir com informações reais do bootcamp
    title: "Bootcamp de Desenvolvimento Full Stack",
    institution: "[Instituição]",
    year: "2026",
    status: "Concluído",
    isMock: true,
  },
];

// MOCK DATA — certificados de exemplo; substituir por certificados reais quando disponíveis
export const certificates: Certificate[] = [
  { title: "Desenvolvimento Web", issuer: "[Instituição]", isMock: true },
  { title: "Fundamentos de Data Analytics", issuer: "[Instituição]", isMock: true },
];

export const contactMessage = {
  title: "Vamos conversar?",
  description:
    "Estou aberto a oportunidades de estágio, posições em tecnologia e novos desafios profissionais.",
  whatsappDefaultMessage:
    "Olá Arthur, encontrei seu portfólio e gostaria de conversar sobre uma oportunidade.",
};

export const portfolioData = {
  personal,
  social,
  resumeUrl,
  profileImage,
  ogImage,
  aboutText,
  skills,
  languages,
  experience,
  projects,
  education,
  bootcamps,
  certificates,
  contactMessage,
};

export default portfolioData;
