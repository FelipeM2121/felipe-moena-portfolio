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
    description: "Dashboard web que traduce la programación de Primavera P6 en indicadores visuales de avance, hitos y desviaciones, aplicando mi experiencia gestionando programación de proyectos de construcción a una herramienta de control digital.",
    technologies: ["React", "Dashboard", "Visualización de Datos", "Primavera P6"],
    link: "https://felipem2121.github.io/P6_Dashboard/",
    github: "https://github.com/FelipeM2121/P6_Dashboard"
  },
  {
    id: 2,
    title: "Hospital Chat AI",
    description: "Asistente conversacional desarrollado en Python que automatiza la respuesta a consultas frecuentes en un contexto hospitalario, como apoyo a la gestión de información y atención de usuarios.",
    technologies: ["Python", "Machine Learning", "Chatbot AI"],
    link: "https://hospital-chat-ai.netlify.app/",
    github: "https://github.com/FelipeM2121/hospital-chat-ai"
  },
  {
    id: 3,
    title: "Hospital Buin Paine",
    description: "Aplicación web para el seguimiento del avance de instalación de mobiliario no clínico del proyecto Hospital Buin Paine, digitalizando el control que antes se gestionaba en planillas y reportes manuales.",
    technologies: ["React", "Web App"],
    link: "https://hospital-buin-paine.netlify.app/",
    github: "https://github.com/FelipeM2121/hospital-buin-paine-public"
  }
];
