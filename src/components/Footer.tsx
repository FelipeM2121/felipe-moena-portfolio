import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/felipe-moena", label: "LinkedIn" },
    { icon: Mail, href: "mailto:f.moena.c@gmail.com", label: "Email" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Felipe Moena</h3>
            <p className="text-gray-400">Constructor Civil | Gestión de Proyectos</p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
              <MapPin size={16} />
              <span>Ñuñoa, Santiago, Chile</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Secciones</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-secondary transition-colors">Acerca de</a></li>
              <li><a href="#experience" className="hover:text-secondary transition-colors">Experiencia</a></li>
              <li><a href="#projects" className="hover:text-secondary transition-colors">Proyectos</a></li>
              <li><a href="#skills" className="hover:text-secondary transition-colors">Competencias</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-secondary p-3 rounded-full transition-colors"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              +56 9 7218 1349<br />
              f.moena.c@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-400 text-sm"
        >
          <p>© {currentYear} Felipe Moena Céspedes. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado y desarrollado con ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};
