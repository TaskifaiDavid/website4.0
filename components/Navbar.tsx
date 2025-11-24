import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Mission', id: 'problem' },
    { name: 'The Team', id: 'solution' },
    { name: 'Pricing', id: 'pricing' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-lg shadow-gray-200/20 rounded-full px-6 py-3 pointer-events-auto flex items-center justify-between gap-8 md:min-w-[500px]">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-2 group"
          >
            {/* Custom T Logo SVG */}
            <div className="relative w-8 h-8 flex items-center justify-center">
               <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                  {/* Background Orbit */}
                  <path d="M8 30C4 20 16 4 32 8" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round" />
                  {/* The Letter T */}
                  <text x="20" y="30" fontSize="28" fontWeight="bold" fontFamily="serif" fill="#1C5D43" textAnchor="middle">T</text>
                  {/* Foreground Orbit */}
                  <path d="M10 34C18 38 36 24 32 8" stroke="#34B37E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                  {/* Dots */}
                  <circle cx="32" cy="8" r="2" fill="#34B37E" className="animate-pulse" />
                  <circle cx="8" cy="30" r="1.5" fill="#86EFAC" />
               </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-600">TaskifAI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-600 transition-colors"
            >
              Get Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 z-40 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden md:hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-xl"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="block w-full text-center px-4 py-3 bg-brand-500 text-white font-semibold rounded-xl"
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;