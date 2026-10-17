import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'chambres', label: 'Chambres' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'apropos', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d1624]/90 backdrop-blur-md border-b border-[#d4af37]/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveSection('accueil')}>
          <span className="text-[#d4af37] font-serif text-xl tracking-widest font-bold">LUXORIA HOTEL</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveSection(link.id)}
              className={`transition-colors hover:text-[#d4af37] cursor-pointer ${
                activeSection === link.id ? 'text-[#d4af37] border-b-2 border-[#d4af37] pb-1' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={onOpenReservation}
            className="bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium px-5 py-2.5 rounded-lg text-xs transition-colors flex items-center gap-2 shadow-lg shadow-[#d4af37]/10 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            RÉSERVER
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white p-2 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1624] border-b border-gray-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-sm text-gray-300 hover:text-[#d4af37]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full mt-2 bg-[#d4af37] text-gray-950 font-medium py-2.5 rounded-lg text-xs flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            RÉSERVER
          </button>
        </div>
      )}
    </nav>
  );
};