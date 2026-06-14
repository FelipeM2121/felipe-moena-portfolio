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
    items: ["Parques Solares", "Edificación", "Infraestructura Metro", "Excavaciones", "Obra Gruesa", "Terminaciones", "Instalaciones Especiales"]
  },
  {
    category: "Soft Skills",
    items: ["Liderazgo de Equipos", "Resolución de Problemas", "Comunicación", "Negociación", "Toma de Decisiones"]
  }
];

export const certifications = [
  "Microsoft Power BI – Análisis de Datos y Business Intelligence",
  "Microsoft Project – Planificación y Control de Proyectos",
  "Excel Avanzado – Análisis de Datos",
  "Curso PAC (40 horas)",
  "Presupuestos y Análisis de Precios Unitarios (APU)",
  "Data Science",
  "Machine Learning",
  "Primavera P6"
];
