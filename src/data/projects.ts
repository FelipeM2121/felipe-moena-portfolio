export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  metrics: string[];
  technologies: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hospital Buin Paine",
    description: "Coordinación integral de mobiliario no clínico y programación de instalaciones. Gestión de equipos, control de contratos y dashboards de avance en tiempo real.",
    role: "Encargado Mobiliario No Clínico y Programación",
    metrics: [
      "Múltiples recintos coordinados",
      "100% cumplimiento de hitos",
      "Trazabilidad documental completa",
      "Reportes KPI en tiempo real"
    ],
    technologies: ["Power BI", "Excel Avanzado", "Project", "Gestión de Contratos"]
  },
  {
    id: 2,
    title: "Planta Fotovoltaica Enel - 420 MW",
    description: "Gestión técnica integral de planta fotovoltaica de gran envergadura. Implementación de sistemas de calidad, programación de pagos y supervisión de obras civiles.",
    role: "Encargado Oficina Técnica y Calidad",
    metrics: [
      "Capacidad: 420 MW",
      "Múltiples locaciones (Finís Terrae, María Elena, Til Til)",
      "Sistema ISO 9001 implementado",
      "Optimización flujo de caja"
    ],
    technologies: ["ISO 9001", "Programación", "Presupuestos", "Supervisión Civil"]
  },
  {
    id: 3,
    title: "Edificio Guardiamarina Riquelme - 22 Pisos",
    description: "Auditoría interna de calidad para edificio residencial de gran altura. Gestión del sistema ISO 9001 y control de obra gruesa y terminaciones.",
    role: "Auditor Interno de Calidad",
    metrics: [
      "22 pisos completados",
      "Sistema ISO 9001 certificado",
      "Control integral de partidas",
      "Cero no conformidades mayores"
    ],
    technologies: ["ISO 9001", "AutoCAD", "Auditorías", "Control de Calidad"]
  },
  {
    id: 4,
    title: "Metro de Santiago - Línea 6",
    description: "Inspección técnica de obra para construcción de túneles y galerías. Supervisión de excavación y hormigón proyectado en infraestructura subterránea compleja.",
    role: "Inspector Técnico de Obra (ITO)",
    metrics: [
      "Estación Club Hípico",
      "Múltiples tramos completados",
      "Obra subterránea compleja",
      "100% cumplimiento de especificaciones"
    ],
    technologies: ["Excavación", "Hormigón Proyectado", "Supervisión", "Recepción de Obras"]
  },
  {
    id: 5,
    title: "Infraestructura Telecomunicaciones Minería",
    description: "Jefatura de terreno para instalación de estructuras de telecomunicaciones en operaciones mineras de gran escala. Coordinación de equipos y gestión de infraestructura.",
    role: "Jefe de Terreno Telecomunicaciones",
    metrics: [
      "Estructuras Monoposte de 30m",
      "Cobertura 3G y LTE 4G",
      "Operaciones: Los Pelambres, Chuquicamata",
      "Infraestructura Entel instalada"
    ],
    technologies: ["Telecomunicaciones", "Estructuras", "Minería", "Coordinación de Equipos"]
  }
];
