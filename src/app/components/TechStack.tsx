type Technology = {
  name: string;
  logo: React.ReactNode;
};

export function TechStack() {
  const technologies: Technology[] = [
    {
      name: "Java",
      logo: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <path
            fill="#EA2D2E"
            d="M47.6 98.1s-4.8 2.8 3.4 3.7c9.9 1.1 14.9 1 25.8-1.1 0 0 2.9 1.8 6.9 3.4-24.4 10.5-55.3-.6-36.1-6z"
          />
          <path
            fill="#0074BD"
            d="M102.1 108.2s3.5 2.9-3.9 5.2c-14.1 4.3-58.7 5.6-71.1.2-4.5-1.9 3.9-4.6 6.5-5.2 2.7-.6 4.3-.5 4.3-.5-5-3.5-32 6.9-13.7 9.8 49.8 8.1 90.8-3.6 77.9-9.5z"
          />
        </svg>
      ),
    },
    {
      name: "React",
      logo: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <circle cx="64" cy="64" r="11.4" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="6" fill="none">
            <ellipse cx="64" cy="64" rx="50" ry="20" />
            <ellipse cx="64" cy="64" rx="20" ry="50" />
            <ellipse
              cx="64"
              cy="64"
              rx="50"
              ry="20"
              transform="rotate(60 64 64)"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <path fill="#83CD29" d="M64 0L8 32v64l56 32 56-32V32z" />
          <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="40">
            N
          </text>
        </svg>
      ),
    },
    {
      name: "MySQL",
      logo: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <path fill="#00758F" d="M10 90c10-30 30-40 50-40s40 10 50 40H10z" />
          <circle cx="64" cy="40" r="10" fill="#F29111" />
        </svg>
      ),
    },
    {
      name: "NestJS",
      logo: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <path fill="#E0234E" d="M128 0L24 64l40 128 64 64 64-64 40-128z" />
        </svg>
      ),
    },
    {
      name: "Express",
      logo: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="90"
            fill="#ffffff"
          >
            Ex
          </text>
        </svg>
      ),
    },
    {
      name: "DBeaver",
      logo: (
        <svg viewBox="0 0 128 128" className="w-full h-full">
          <rect width="128" height="128" rx="20" fill="#372923" />
          <ellipse cx="64" cy="48" rx="30" ry="16" fill="#FF6F3D" />
          <ellipse cx="64" cy="64" rx="30" ry="16" fill="#FF6F3D" />
          <ellipse cx="64" cy="80" rx="30" ry="16" fill="#FF6F3D" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#1a1a1a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider text-sm mb-2">
            Tecnologías con las que construyo
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-[#ff2637] to-red-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-110">
                {tech.logo}
              </div>

              <span className="mt-3 text-xs text-gray-500 group-hover:text-[#ff2637] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
