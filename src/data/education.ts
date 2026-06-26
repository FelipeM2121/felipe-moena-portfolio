export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Constructor Civil",
    institution: "Universidad de Santiago de Chile (USACH)",
    year: "2021",
    description: "Profesional especializado en gestión de proyectos de construcción"
  },
  {
    id: 4,
    degree: "Diplomado Planificación y Gestión de Proyectos en Primavera P6",
    institution: "Pontificia Universidad Católica de Valparaíso",
    year: "2026"
  },
  {
    id: 3,
    degree: "Bootcamp Python y Machine Learning",
    institution: "Beca SONDA Skillnest",
    year: "2026",
    description: "Formación intensiva en programación Python y modelos de Machine Learning"
  },
  {
    id: 2,
    degree: "Tecnólogo en Construcción",
    institution: "Universidad de Santiago de Chile (USACH)",
    year: "2008",
    description: "Formación técnica en obras civiles y supervisión"
  }
];
