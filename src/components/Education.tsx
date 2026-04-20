import { motion } from 'framer-motion';
import { education } from '../data/education';
import { BookOpen, Calendar } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Educación</h2>
          <p className="text-lg text-gray-600">Formación académica y profesional</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-light p-6 rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-dark">{edu.degree}</h3>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                    <Calendar size={16} />
                    <span>{edu.year}</span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 mt-3">{edu.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
