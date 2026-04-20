import coder from "../../assets/certificacion-desarrolloWeb-coderhouse.jpg";

export function Certificaciones() {
  const certificaciones = [
    {
      name: "Desarrollo Web",
      academy: "Coderhouse",
      year: "2021",
      image: coder,
    },
    {
      name: "Desarrollo Web",
      academy: "Coderhouse",
      year: "2021",
      image: "coder2",
    },
    {
      name: "Node.Js: de cero a experto",
      academy: "UDEMY",
      year: "2026",
      image: "udemy1",
    },
  ];

  return (
    <section className="py-16 bg-[#1a1a1a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">
            Certificaciones
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#ff2637] to-red-600 mx-auto"></div>
        </div>

        {/* Certificados */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {certificaciones.map((cert, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              {/* Imagen certificado */}
              <div className="w-48 md:w-60 rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="mt-3 text-center">
                <p className="text-sm text-white font-medium">{cert.name}</p>
                <p className="text-xs text-gray-400">
                  {cert.academy} • {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
