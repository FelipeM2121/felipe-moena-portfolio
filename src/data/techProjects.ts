export interface TechProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export const techProjects: TechProject[] = [
  {
    id: 1,
    title: "Dashboard de Control de Proyectos P6",
    description: "Dashboard interactivo desarrollado para visualización y seguimiento de avance de proyectos, integrando indicadores clave de gestión y programación.",
    technologies: ["React", "Dashboard", "Visualización de Datos"],
    link: "https://felipem2121.github.io/P6_Dashboard/"
  }
];
