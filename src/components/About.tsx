import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Zap } from 'lucide-react';

export const About = () => {
  const specialties = [
    {
      icon: Zap,
      title: "Energía Solar",
      description: "Experiencia en plantas fotovoltaicas hasta 420 MW"
    },
    {
      icon: Briefcase,
      title: "Gestión de Proyectos",
      description: "Planificación, programación y control integral"
    },
    {
      icon: Award,
      title: "Control de Calidad",
      description: "Certificación ISO 9001 y sistemas de gestión"
    },
    {
      icon: Users,
      title: "Liderazgo",
      description: "Dirección de equipos multidisciplinarios"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Acerca de Mí</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Constructor Civil con especialización en gestión de proyectos de gran envergadura y control de calidad en infraestructuras críticas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {specialties.map((specialty, idx) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-light p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Icon className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold text-dark mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Resumen Profesional</h3>
          <p className="text-lg leading-relaxed">
            Con más de una década de experiencia en gestión de proyectos de construcción, tengo un track record comprobado en la ejecución de proyectos complejos de múltiples millones de dólares. Mi expertise abarca desde la planificación inicial hasta la supervisión de terminaciones, con énfasis especial en control de calidad, cumplimiento de hitos y optimización de recursos. He liderado equipos multidisciplinarios en entornos desafiantes, implementado sistemas de gestión ISO 9001 y desarrollado dashboards de gestión que han mejorado significativamente la eficiencia operacional. Orientado a resultados, adaptable y con fuerte capacidad de comunicación tanto con ejecutivos como con equipos técnicos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
