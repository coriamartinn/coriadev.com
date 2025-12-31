import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 group"
          >
            <span className="text-2xl md:text-3xl font-mono text-[#ff2637] group-hover:text-red-400 transition-colors">
              {'{'}<span className="text-white">CORIA</span>{'}'}
            </span>
            <span className="text-xl md:text-2xl text-white">DEV</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-[#ff2637] transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('portafolio')}
              className="text-gray-300 hover:text-[#ff2637] transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-gray-300 hover:text-[#ff2637] transition-colors"
            >
              Sobre Mí
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contacto')}
            className="hidden md:block bg-[#ff2637] text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/30"
          >
            COTIZAR PROYECTO
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-[#1a1a1a]">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left text-gray-300 hover:text-[#ff2637] transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('portafolio')}
              className="block w-full text-left text-gray-300 hover:text-[#ff2637] transition-colors py-2"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="block w-full text-left text-gray-300 hover:text-[#ff2637] transition-colors py-2"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full bg-[#ff2637] text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/30"
            >
              COTIZAR PROYECTO
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}