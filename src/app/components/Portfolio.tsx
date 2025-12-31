import { ImageWithFallback } from './figma/ImageWithFallback';

// Definimos la estructura de datos para TypeScript
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: "Estudio Jurídico & Legal",
    description: "Landing page corporativa diseñada para transmitir confianza y autoridad. Optimizada para la captación de clientes (Leads) con llamadas a la acción estratégicas y diseño responsive de alto impacto.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/rodriguezestudio.png",
    liveUrl: "https://estudiodresrodriguez.com.ar/",
    repoUrl: "https://github.com/coriamartinn/LegalDev",
  },
  {
    title: "Constructora & Desarrollos",
    description: "Portfolio digital para empresa de construcción. Galería de proyectos interactiva y optimización de imágenes para una carga veloz. Diseño robusto que refleja la solidez de la marca.",
    tech: ["React", "Vite", "UX/UI Design"],
    image: "/jc-construcciones.png",
    liveUrl: "https://tu-landing-constructora.vercel.app",
    repoUrl: "https://github.com/tu-usuario/landing-constructora",
  },
  {
    title: "Sistema de Gestión Psicopedagogía (MVP)",
    description: "Aplicación web completa para la administración de historias clínicas y pacientes. Incluye control de sesiones, notas evolutivas privadas y agenda digital. Seguridad de datos garantizada.",
    tech: ["React", "Node.js", "MySQL", "Auth"],
    image: "/psico-app.png",
    liveUrl: "https://coriadev.com/psico-app",
    repoUrl: "https://github.com/coriamartinn/psico-app-front",
  },
];

export function Portfolio() {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-[#0d0d0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header de la sección */}
        <div className="mb-16 md:mb-24">
          <div className="inline-block">
            <span className="text-[#ff2637] uppercase tracking-wider text-sm font-semibold">Portafolio</span>
            <div className="h-1 w-full bg-gradient-to-r from-[#ff2637] to-red-600 mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-5xl text-white mt-6 font-bold">
            Proyectos que <br />
            <span className="bg-gradient-to-r from-[#ff2637] to-red-600 text-transparent bg-clip-text">
              generan impacto.
            </span>
          </h2>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#ff2637]/50 transition-colors duration-300 flex flex-col">

              {/* Imagen del proyecto */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-[#ff2637] bg-[#ff2637]/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl text-white font-bold mb-3 group-hover:text-[#ff2637] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Botones de Acción */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    Ver Proyecto
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-colors"
                    title="Ver Código en GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}