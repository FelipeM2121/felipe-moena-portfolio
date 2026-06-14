import { motion } from 'framer-motion';
import { techProjects } from '../data/techProjects';
import { ExternalLink, Code, Github } from 'lucide-react';

export const TechProjects = () => {
  return (
    <section id="tech-projects" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Portafolio de Desarrollo de Data & IA</h2>
          <p className="text-lg text-gray-600">Desarrollos propios desplegados</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="bg-gradient-to-br from-secondary to-primary p-6 text-white flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Code size={22} />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>

                <p className="text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, tidx) => (
                    <span key={tidx} className="bg-white/20 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 transition-colors px-3 py-2 rounded"
                  >
                    <ExternalLink size={16} />
                    Ver Proyecto
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white/20 hover:bg-white/30 transition-colors px-3 py-2 rounded"
                  >
                    <Github size={16} />
                    Ver Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
