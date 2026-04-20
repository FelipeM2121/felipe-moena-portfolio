import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { CheckCircle, Zap } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-gray-600">Selección de mis trabajos más relevantes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 auto-rows-fr">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-light rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col ${
                idx === 1 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="bg-gradient-to-br from-primary to-blue-900 p-6 text-white flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm font-semibold mb-4 opacity-90">{project.role}</p>
                
                <div className="flex-grow">
                  <p className="text-sm mb-4 leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-4 space-y-3 pt-4 border-t border-white/20">
                  {/* Metrics */}
                  <div className="space-y-2">
                    {project.metrics.slice(0, 2).map((metric, midx) => (
                      <div key={midx} className="flex items-start gap-2 text-xs">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                    {project.metrics.length > 2 && (
                      <div className="flex items-start gap-2 text-xs opacity-75">
                        <span>+{project.metrics.length - 2} más</span>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 2).map((tech, tidx) => (
                      <span key={tidx} className="bg-white/20 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="bg-white/20 text-xs px-2 py-1 rounded">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-dark mb-8 flex items-center gap-2">
            <Zap className="text-secondary" size={28} />
            Impacto en Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold text-primary">420 MW</p>
              <p className="text-gray-600">Plantas Fotovoltaicas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary">22</p>
              <p className="text-gray-600">Pisos (Máx. Altura)</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-success">30</p>
              <p className="text-gray-600">Metros (Estructuras)</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-gray-600">Cumplimiento Hitos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
