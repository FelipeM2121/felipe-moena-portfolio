export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Software & Tools",
    items: ["Microsoft Project", "Excel Avanzado", "AutoCAD", "Primavera P6"]
  },
  {
    category: "Gestión de Proyectos",
    items: ["Planificación", "Programación", "Control de Costos", "Estados de Pago", "Contratos de Construcción", "Presupuestos"]
  },
  {
    category: "Control de Calidad",
    items: ["ISO 9001", "Auditorías Internas", "Sistemas de Gestión", "Protocolos de Recepción", "No Conformidades"]
  },
  {
    category: "Data & IA",
    items: ["Python", "Machine Learning", "Data Science", "Power BI"]
  },
  {
    category: "Especialidades Técnicas",
    items: ["Parques Solares", "Edificación", "Infraestructura Metro", "Excavaciones", "Obra Gruesa", "Terminaciones"]
  }
];

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export const certifications: Certification[] = [
  { name: "Microsoft Power BI – Análisis de Datos y BI", issuer: "OTEC Capacita" },
  { name: "Microsoft Project – Planificación y Control de Proyectos", issuer: "OTEC Capacita" },
  { name: "Excel Avanzado – Análisis de Datos" },
  { name: "Curso PAC (40 horas)", issuer: "PUC" },
  { name: "Data Science", issuer: "Beca SONDA Skillnest", year: "2026" },
  { name: "Machine Learning", issuer: "Beca SONDA Skillnest", year: "2026" },
  { name: "Primavera P6", issuer: "PUCV" }
];
