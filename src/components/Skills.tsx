import { motion } from 'framer-motion';
import { skills, certifications } from '../data/skills';
import { Award, Code, Target } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Software & Tools':
      return Code;
    case 'Gestión de Proyectos':
      return Target;
    case 'Control de Calidad':
      return Award;
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
          <h2 className="text-4xl font-bold text-dark mb-4">Competencias y Certificaciones</h2>
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
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Award className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark">Certificaciones</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">✓</span>
                <p className="text-sm text-gray-700">
                  {cert.name}
                  {(cert.issuer || cert.year) && (
                    <span className="text-gray-400">
                      {' '}— {[cert.issuer, cert.year].filter(Boolean).join(', ')}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
