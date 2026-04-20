export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  category: 'management' | 'quality' | 'field';
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Encargado Mobiliario No Clínico y Programación",
    company: "Integrador Soc. Concesionaria – Hospital Buin Paine – Dominion",
    period: "Enero 2024 – Presente",
    category: 'management',
    description: [
      "Coordinación de equipos de instalación de mobiliario hospitalario no clínico",
      "Dashboards de avance físico por recinto, tipología y proveedor con actualización dinámica",
      "Control de contratos y cumplimiento de hitos de entrega e instalación",
      "Trazabilidad documental (certificados, actas de recepción, no conformidades)",
      "Indicadores clave (KPIs) de avance programado vs. real para reportes ejecutivos"
    ]
  },
  {
    id: 2,
    title: "Encargado de Oficina Técnica y Calidad",
    company: "JLP Proyectos – Plantas Fotovoltaicas Enel",
    period: "Mayo 2022 – Febrero 2024",
    category: 'management',
    description: [
      "Gestión de oficina técnica para obras civiles de planta fotovoltaica de 420 MW",
      "Programación y control de estados de pago adicionales, optimizando flujo de caja",
      "Implementación y supervisión de sistema de gestión de calidad para obras civiles",
      "Extensión Finís Terrae, María Elena y El Manzano Til Til"
    ]
  },
  {
    id: 3,
    title: "Jefe de Terreno Terminaciones",
    company: "Constructora FGS – Edificio Argentina II, Los Andes",
    period: "Septiembre 2021 – Marzo 2022",
    category: 'field',
    description: [
      "Supervisión de terminaciones de edificio de 12 pisos y 126 departamentos",
      "Coordinación de equipos de trabajo",
      "Aseguramiento de cumplimiento de estándares de calidad"
    ]
  },
  {
    id: 4,
    title: "Jefe de Terreno Telecomunicaciones",
    company: "Mer Telecom S.A. – Proyectos Mineros",
    period: "Febrero 2019 – Marzo 2022",
    category: 'field',
    description: [
      "Instalación de estructuras Monoposte de 30 metros para señal 3G y LTE 4G",
      "Minera Los Pelambres y Codelco Chuquicamata",
      "Coordinación de instalación Fast Side para infraestructura Entel en faenas mineras"
    ]
  },
  {
    id: 5,
    title: "Auditor Interno de Calidad",
    company: "Constructora ISA S.A. – Edificio Guardiamarina Riquelme",
    period: "Abril 2016 – Julio 2019",
    category: 'quality',
    description: [
      "Gestión del sistema de calidad ISO 9001 para edificio de 22 pisos",
      "Recepción y control de partidas de obra gruesa y terminaciones",
      "Proyecto de 22 pisos en Santiago"
    ]
  },
  {
    id: 6,
    title: "Inspector Técnico de Obra (ITO)",
    company: "Consorcio Siga-Poch Ingeniería – Metro de Santiago Línea 6",
    period: "Enero 2014 – Marzo 2016",
    category: 'field',
    description: [
      "Supervisión y recepción de trabajos en excavación y hormigón proyectado",
      "Construcción de piques, galerías y túneles",
      "Estación Club Hípico – Tramos 1 y 5"
    ]
  }
];
