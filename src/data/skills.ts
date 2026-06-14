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

export const certifications = [
  "Microsoft Power BI – Análisis de Datos y Business Intelligence, OTEC Capacita",
  "Microsoft Project – Planificación y Control de Proyectos, OTEC Capacita",
  "Excel Avanzado – Análisis de Datos",
  "Curso PAC (40 horas), PUC",
  "Data Science – Beca SONDA Skillnest, 2026",
  "Machine Learning – Beca SONDA Skillnest, 2026",
  "Primavera P6 – PUCV"
];
