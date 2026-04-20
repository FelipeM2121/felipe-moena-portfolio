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
    id: 2,
    degree: "Tecnólogo en Construcción",
    institution: "Universidad de Santiago de Chile (USACH)",
    year: "2008",
    description: "Formación técnica en obras civiles y supervisión"
  }
];
