import { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences, Experience } from '../data/experience';
import { Briefcase } from 'lucide-react';

export const ExperienceSection = () => {
  const [filter, setFilter] = useState<'all' | 'management' | 'quality' | 'field'>('all');
  const [selectedExp, setSelectedExp] = useState<Experience | null>(experiences[0]);

  const filtered = filter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === filter);

  const categoryLabels = {
    management: 'Gestión',
    quality: 'Calidad',
    field: 'Terreno',
    all: 'Todas'
  };

  return (
    <section id="experience" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Experiencia Profesional</h2>
          <p className="text-lg text-gray-600">Más de 10 años en proyectos de construcción, energía y telecomunicaciones</p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'management', 'quality', 'field'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                filter === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border-2 border-primary hover:bg-light'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de experiencias */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {filtered.map((exp, idx) => (
                <motion.button
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedExp(exp)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    selectedExp?.id === exp.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-dark hover:bg-light border-l-4 border-primary'
                  }`}
                >
                  <h3 className="font-bold text-sm">{exp.title}</h3>
                  <p className="text-xs opacity-75 mt-1">{exp.period}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Detalle de experiencia seleccionada */}
          <motion.div
            key={selectedExp?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg"
          >
            {selectedExp && (
              <>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Briefcase className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark">{selectedExp.title}</h3>
                    <p className="text-primary font-semibold">{selectedExp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{selectedExp.period}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-dark mb-4">Responsabilidades y logros:</h4>
                  {selectedExp.description.map((desc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="text-secondary font-bold">•</span>
                      <p className="text-gray-700">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
