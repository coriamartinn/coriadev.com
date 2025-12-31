import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff2637]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff2637] to-red-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjcxNjAzODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Martín Coria - Desarrollador Full Stack"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <div className="inline-block">
              <span className="text-[#ff2637] uppercase tracking-wider text-sm">Sobre Mí</span>
              <div className="h-1 w-20 bg-gradient-to-r from-[#ff2637] to-red-600 mt-2"></div>
            </div>

            <h2 className="text-3xl md:text-5xl text-white">
              Programación profesional,{' '}
              <span className="bg-gradient-to-r from-[#ff2637] to-red-600 text-transparent bg-clip-text">
                sin atajos.
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Detrás de Coria Dev estoy yo, Martín. Me estoy formando en la{' '}
                <span className="text-[#ff2637] font-semibold">Tecnicatura Universitaria en Programación (UTN)</span>,
                una de las instituciones más exigentes del país, para garantizarte que tu proyecto tenga bases sólidas.
              </p>

              <p>
                Me especializo en crear soluciones digitales a medida, alejándome de las plantillas prefabricadas que limitan tu crecimiento.
                Mi trabajo se basa en tres pilares: código limpio para que tu web vuele, escalabilidad para que el sistema crezca con tus ventas, y estrategia para entender tu negocio.
              </p>

              <p>
                Transformemos tu necesidad en una{' '}
                <span className="text-[#ff2637] font-semibold">herramienta digital potente</span> que no solo se vea bien, sino que resuelva problemas reales.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
              <div className="bg-[#0d0d0d]/50 border border-[#ff2637]/20 rounded-lg px-4 md:px-6 py-2 md:py-3 flex-1 min-w-[100px]">
                <div className="text-[#ff2637] text-xl md:text-2xl">UTN</div>
                <div className="text-gray-400 text-xs md:text-sm">Formación Académica</div>
              </div>
              <div className="bg-[#0d0d0d]/50 border border-[#ff2637]/20 rounded-lg px-4 md:px-6 py-2 md:py-3 flex-1 min-w-[100px]">
                <div className="text-[#ff2637] text-xl md:text-2xl">Full Stack</div>
                <div className="text-gray-400 text-xs md:text-sm">Perfil Técnico</div>
              </div>
              <div className="bg-[#0d0d0d]/50 border border-[#ff2637]/20 rounded-lg px-4 md:px-6 py-2 md:py-3 flex-1 min-w-[100px]">
                <div className="text-[#ff2637] text-xl md:text-2xl">100%</div>
                <div className="text-gray-400 text-xs md:text-sm">Compromiso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}