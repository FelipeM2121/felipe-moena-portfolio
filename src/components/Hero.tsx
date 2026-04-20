import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-dark mb-4">
              Felipe Moena
            </h2>
            <p className="text-2xl text-primary font-semibold mb-4">
              Constructor Civil | Gestión de Proyectos
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Más de 10 años de experiencia en gestión de proyectos de construcción, energía solar fotovoltaica y telecomunicaciones. Especialista en control de calidad y liderazgo de equipos multidisciplinarios.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ver Trabajos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Contactar
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">420</p>
                <p className="text-gray-600">MW en Energía Solar</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-success">50+</p>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
            </div>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Felipe Moena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
