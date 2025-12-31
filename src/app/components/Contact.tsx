import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this would typically send to a backend)
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff2637]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            ¿Tenés un proyecto{' '}
            <span className="bg-gradient-to-r from-[#ff2637] to-red-600 text-transparent bg-clip-text">
              en mente?
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Hablemos y transformemos tu idea en realidad
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#1a1a1a]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0d0d0d]/50 border border-[#1a1a1a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff2637] focus:ring-2 focus:ring-red-500/20 transition-all"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0d0d0d]/50 border border-[#1a1a1a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff2637] focus:ring-2 focus:ring-red-500/20 transition-all"
                placeholder="tu@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-[#0d0d0d]/50 border border-[#1a1a1a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff2637] focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                placeholder="Contame sobre tu proyecto..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff2637] text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/30 flex items-center justify-center gap-3 group"
            >
              <span>Enviar Mensaje</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
            <p className="text-gray-400 text-center mb-6">
              También podés contactarme directamente:
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
              {/* Email */}
              <a
                href="mailto:coriamartin-dev@outlook.com"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#ff2637] transition-colors justify-center sm:justify-start"
              >
                <div className="bg-[#0d0d0d] p-3 rounded-lg group-hover:bg-black transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-sm md:text-base">coriamartin-dev@outlook.com</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/martincoria26/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#ff2637] transition-colors justify-center sm:justify-start"
              >
                <div className="bg-[#0d0d0d] p-3 rounded-lg group-hover:bg-black transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="text-sm md:text-base">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/coriamartinn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-300 hover:text-[#ff2637] transition-colors justify-center sm:justify-start"
              >
                <div className="bg-[#0d0d0d] p-3 rounded-lg group-hover:bg-black transition-colors">
                  <Github size={20} />
                </div>
                <span className="text-sm md:text-base">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-mono text-[#ff2637]">
                {'{'}<span className="text-white">CORIA</span>{'}'}
              </span>
              <span className="text-xl text-white">DEV</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2024 Coria Dev. Todos los derechos reservados.
            </p>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-[#ff2637] transition-colors text-sm"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}