import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Empresarial',
      category: 'Sistema a Medida',
      description: 'Dashboard interactivo con análisis de datos en tiempo real, gestión de inventario y reportes automatizados.',
      image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNjcxMzIwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Spring Boot', 'MySQL'],
      gradient: 'from-[#ff2637] to-red-700',
    },
    {
      id: 2,
      title: 'Landing Page Comercial',
      category: 'Web & Landing',
      description: 'Sitio web de alto impacto visual optimizado para conversiones, con diseño responsive y carga ultra rápida.',
      image: 'https://images.unsplash.com/photo-1560202582-a391c31ec300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjcxNzk1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Tailwind', 'Node.js'],
      gradient: 'from-red-600 to-red-800',
    },
    {
      id: 3,
      title: 'App Mobile Responsive',
      category: 'Web & Landing',
      description: 'Aplicación web progresiva con diseño mobile-first, optimizada para todos los dispositivos y tamaños de pantalla.',
      image: 'https://images.unsplash.com/photo-1565268872818-0f20305ad906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjcyMTExNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Motion', 'Responsive'],
      gradient: 'from-[#ff2637] to-red-900',
    },
  ];

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[#ff2637] uppercase tracking-wider text-sm">Portafolio</span>
            <div className="h-1 w-20 bg-gradient-to-r from-[#ff2637] to-red-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-6xl text-white mt-4 mb-4">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-[#ff2637] to-red-600 text-transparent bg-clip-text">
              Recientes
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Una muestra de soluciones digitales que he desarrollado para diferentes clientes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#1a1a1a] hover:border-[#ff2637]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-sm text-[#ff2637] px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* View Project Button - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#ff2637] hover:text-white transition-colors">
                    <span>Ver Proyecto</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-white mb-2 group-hover:text-[#ff2637] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#0d0d0d] text-gray-300 px-3 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            ¿Te gustaría ver más ejemplos de mi trabajo?{' '}
            <button className="text-[#ff2637] hover:text-red-400 underline transition-colors">
              Contáctame para más detalles
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}