export interface TechProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
}

export const techProjects: TechProject[] = [
  {
    id: 1,
    title: "Dashboard de Control de Proyectos P6",
    description: "Dashboard interactivo desarrollado para visualización y seguimiento de avance de proyectos, integrando indicadores clave de gestión y programación.",
    technologies: ["React", "Dashboard", "Visualización de Datos"],
    link: "https://felipem2121.github.io/P6_Dashboard/",
    github: "https://github.com/FelipeM2121/P6_Dashboard"
  },
  {
    id: 2,
    title: "Hospital Chat AI",
    description: "Asistente conversacional con inteligencia artificial orientado a la atención y gestión de consultas en el ámbito hospitalario.",
    technologies: ["Python", "Machine Learning", "Chatbot AI"],
    link: "https://hospital-chat-ai.netlify.app/",
    github: "https://github.com/FelipeM2121/hospital-chat-ai"
  },
  {
    id: 3,
    title: "Hospital Buin Paine",
    description: "Plataforma web desarrollada para la gestión y seguimiento de información del proyecto Hospital Buin Paine.",
    technologies: ["React", "Web App"],
    link: "https://hospital-buin-paine.netlify.app/",
    github: "https://github.com/FelipeM2121/hospital-buin-paine-public"
  }
];
