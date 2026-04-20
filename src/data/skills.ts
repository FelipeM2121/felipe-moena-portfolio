export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Software & Tools",
    items: ["Microsoft Project", "Power BI", "Excel Avanzado", "AutoCAD", "Microsoft Teams", "Asana"]
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
    category: "Especialidades",
    items: ["Energía Solar Fotovoltaica", "Edificación Residencial", "Infraestructura Metro", "Telecomunicaciones Mineras", "Obras Civiles"]
  },
  {
    category: "Soft Skills",
    items: ["Liderazgo de Equipos", "Resolución de Problemas", "Comunicación", "Negociación", "Toma de Decisiones"]
  },
  {
    category: "Obras Civiles",
    items: ["Hormigón Proyectado", "Excavaciones", "Obra Gruesa", "Terminaciones", "Instalaciones Especiales"]
  }
];

export const certifications = [
  "Microsoft Power BI – Análisis de Datos y Business Intelligence",
  "Microsoft Project – Planificación y Control de Proyectos",
  "Excel Avanzado – Análisis de Datos",
  "Curso PAC (40 horas) – Prevención de Riesgos",
  "Presupuestos y Análisis de Precios Unitarios (APU)"
];
