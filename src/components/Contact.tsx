import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "+56 9 7218 1349",
      href: "tel:+56972181349"
    },
    {
      icon: Mail,
      label: "Email",
      value: "f.moena.c@gmail.com",
      href: "mailto:f.moena.c@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "felipe-moena",
      href: "https://linkedin.com/in/felipe-moena"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Ñuñoa, Santiago, Chile",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Contacto</h2>
          <p className="text-lg text-gray-600">¿Interesado en trabajar juntos? Déjame saber</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow hover:border-primary border-l-4 border-primary/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">{info.label}</h3>
                      <p className="text-gray-600 text-sm mt-1">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">Envíame un Mensaje</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Asunto"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Tu mensaje"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
