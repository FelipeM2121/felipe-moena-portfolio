import { motion } from 'framer-motion';
import { skills, certifications } from '../data/skills';
import { Award, Code, Target, Users } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Software & Tools':
      return Code;
    case 'Gestión de Proyectos':
      return Target;
    case 'Control de Calidad':
      return Award;
    case 'Soft Skills':
      return Users;
    default:
      return Code;
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Competencias y Habilidades</h2>
          <p className="text-lg text-gray-600">Expertise desarrollado a través de años de experiencia</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skillGroup, idx) => {
            const Icon = getCategoryIcon(skillGroup.category);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{skillGroup.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (idx * 0.1) + (itemIdx * 0.05) }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award size={28} />
            Certificaciones Profesionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 bg-white/10 p-4 rounded-lg"
              >
                <span className="text-secondary text-xl mt-1">✓</span>
                <p className="text-sm leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
