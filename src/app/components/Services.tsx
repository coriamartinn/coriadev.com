import { Globe, Gauge, TrendingUp, Database, BarChart3, Layers, ChevronRight } from 'lucide-react';

export function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-32 bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            ¿Cómo puedo{' '}
            <span className="bg-gradient-to-r from-[#ff2637] to-red-600 text-transparent bg-clip-text">
              ayudarte?
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ofrezco dos tipos de servicios adaptados a las necesidades específicas de tu negocio
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Card A - Web & Landing Pages */}
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl p-8 border border-[#1a1a1a] hover:border-[#ff2637]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1">
            {/* Icon */}
            <div className="mb-6 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff2637] to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                <Globe size={32} className="text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl text-white mb-4">
              Webs & Landing Pages
            </h3>

            {/* Subtitle */}
            <p className="text-[#ff2637] mb-6 uppercase tracking-wide text-sm">
              Presencia Online
            </p>

            {/* Description Points */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <Gauge className="text-[#ff2637] mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong className="text-white">Ideal para comercios:</strong> Sitios web rápidos
                  y profesionales para presentar tu negocio
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <TrendingUp className="text-[#ff2637] mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong className="text-white">Enfocado en ventas:</strong> Diseño persuasivo
                  optimizado para convertir visitantes en clientes
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Gauge className="text-[#ff2637] mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong className="text-white">Rápido y visual:</strong> Carga instantánea y
                  diseño atractivo que capta la atención
                </span>
              </li>
            </ul>

            {/* CTA Link */}
            <button
              onClick={() => scrollToSection('portafolio')}
              className="group/link flex items-center gap-2 text-[#ff2637] hover:text-red-400 transition-colors"
            >
              <span>Ver ejemplos</span>
              <ChevronRight
                size={20}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </button>

            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2637]/10 rounded-full blur-3xl group-hover:bg-[#ff2637]/20 transition-colors duration-300"></div>
          </div>

          {/* Card B - Sistemas a Medida */}
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl p-8 border border-[#1a1a1a] hover:border-[#ff2637]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-1">
            {/* Icon */}
            <div className="mb-6 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/30">
                <Database size={32} className="text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl text-white mb-4">
              Sistemas a Medida & MVPs
            </h3>

            {/* Subtitle */}
            <p className="text-[#ff2637] mb-6 uppercase tracking-wide text-sm">
              Soluciones de Software
            </p>

            {/* Description Points */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <Layers className="text-[#ff2637] mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong className="text-white">Ideal para PyMEs/Startups:</strong> Software
                  personalizado que se adapta a tus procesos
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <BarChart3 className="text-[#ff2637] mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong className="text-white">Gestión completa:</strong> Sistemas de stock,
                  dashboards interactivos, CRMs, ERPs
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Database className="text-[#ff2637] mt-1 flex-shrink-0" size={20} />
                <span>
                  <strong className="text-white">Procesos complejos:</strong> Automatización de
                  tareas y flujos de trabajo empresariales
                </span>
              </li>
            </ul>

            {/* CTA Link */}
            <button
              onClick={() => scrollToSection('portafolio')}
              className="group/link flex items-center gap-2 text-[#ff2637] hover:text-red-400 transition-colors"
            >
              <span>Ver ejemplos</span>
              <ChevronRight
                size={20}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </button>

            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2637]/10 rounded-full blur-3xl group-hover:bg-[#ff2637]/20 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}