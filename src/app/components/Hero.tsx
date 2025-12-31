import { useEffect, useState } from 'react';
import { Rocket, Settings, Code2, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transformo ideas en soluciones digitales rentables.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '48h', label: 'Entrega de Propuestas' },
    { value: '100%', label: 'Proyectos Completados' },
    { value: '24/7', label: 'Soporte Post-Lanzamiento' },
  ];

  const benefits = [
    'Código limpio y escalable',
    'Diseño responsive garantizado',
    'SEO optimizado desde el inicio',
    'Soporte técnico incluido',
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc2NzIxMTE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-[#0d0d0d]/90 to-[#0d0d0d]"></div>
        
        {/* Animated red glow effect */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff2637]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#ff2637]/10 border border-[#ff2637]/30 rounded-full px-4 py-2 md:px-6 md:py-2.5 mx-auto lg:mx-0"
            >
              <Sparkles className="text-[#ff2637]" size={18} />
              <span className="text-[#ff2637] text-xs md:text-sm uppercase tracking-wider">
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
            >
              Desarrollo{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#ff2637] to-red-600 text-transparent bg-clip-text">
                  Software Profesional
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ff2637] to-red-600"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              <br className="hidden sm:block" />
              para tu Negocio
            </motion.h1>

            {/* Typed Subheadline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="min-h-[60px] md:min-h-[80px]"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono">
                {typedText}
                <span className="animate-pulse text-[#ff2637]">|</span>
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-xl mx-auto lg:mx-0"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300 text-sm md:text-base"
                >
                  <CheckCircle2 className="text-[#ff2637] flex-shrink-0" size={20} />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className="group relative bg-[#ff2637] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 shadow-2xl shadow-red-500/40 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Rocket size={20} className="group-hover:animate-bounce" />
                  <span className="text-sm md:text-base">Comenzar mi Proyecto</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-red-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portafolio')}
                className="group bg-transparent border-2 border-[#ff2637] text-[#ff2637] px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:bg-[#ff2637]/10 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Code2 size={20} />
                <span className="text-sm md:text-base">Ver Trabajos Anteriores</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Stats & Trust Signals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#ff2637]/20 rounded-xl p-3 md:p-6 text-center hover:border-[#ff2637]/50 transition-all hover:scale-105"
                >
                  <div className="text-2xl md:text-4xl text-[#ff2637] mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-xs md:text-sm leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-[#1a1a1a]/80 to-black/80 backdrop-blur-sm border border-[#ff2637]/20 rounded-2xl p-6 md:p-8 space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#ff2637]/10 p-3 rounded-lg">
                  <Zap className="text-[#ff2637]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg md:text-xl mb-2">Entrega Rápida</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Metodología ágil para lanzar tu proyecto en tiempo récord sin sacrificar calidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#ff2637]/10 p-3 rounded-lg">
                  <Settings className="text-[#ff2637]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg md:text-xl mb-2">Soluciones a Medida</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Cada línea de código pensada específicamente para las necesidades de tu negocio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#ff2637]/10 p-3 rounded-lg">
                  <CheckCircle2 className="text-[#ff2637]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg md:text-xl mb-2">Garantía de Calidad</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    Código limpio, documentado y testeado. Soporte continuo post-lanzamiento.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center lg:text-left"
            >
              <p className="text-gray-400 text-sm md:text-base mb-3">
                Confiado por negocios en Argentina 🇦🇷
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
                    className="w-5 h-5 md:w-6 md:h-6 text-[#ff2637]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
                <span className="ml-2 text-gray-400 text-sm md:text-base">5.0 / 5.0</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#ff2637] rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-[#ff2637] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
