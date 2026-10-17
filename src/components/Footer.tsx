import React from 'react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer id="contact" className="bg-[#050910] border-t border-gray-800 text-gray-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <span className="text-[#d4af37] font-serif text-lg tracking-widest font-bold">LUXORIA HOTEL</span>
          <p className="text-gray-400 leading-relaxed">
            L'excellence hôtelière au cœur de Dakar, offrant un cadre somptueux pour vos séjours professionnels ou touristiques.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold text-sm mb-4 uppercase tracking-wider">Liens rapides</h4>
          <ul className="space-y-2">
            <li><button onClick={() => setActiveSection('accueil')} className="hover:text-[#d4af37] cursor-pointer">Accueil</button></li>
            <li><button onClick={() => setActiveSection('chambres')} className="hover:text-[#d4af37] cursor-pointer">Chambres</button></li>
            <li><button onClick={() => setActiveSection('services')} className="hover:text-[#d4af37] cursor-pointer">Services</button></li>
            <li><button onClick={() => setActiveSection('blog')} className="hover:text-[#d4af37] cursor-pointer">Blog</button></li>
          </ul>
        </div>

        <div id="apropos">
          <h4 className="text-white font-serif font-bold text-sm mb-4 uppercase tracking-wider">À propos</h4>
          <ul className="space-y-2">
            <li><span className="hover:text-[#d4af37] cursor-pointer">À propos de nous</span></li>
            <li><span className="hover:text-[#d4af37] cursor-pointer">Carrières</span></li>
            <li><span className="hover:text-[#d4af37] cursor-pointer">Presse & Actualités</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold text-sm mb-4 uppercase tracking-wider">Suivez-nous</h4>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="px-3 py-1.5 rounded-lg bg-[#0d1624] border border-gray-800 text-white hover:text-[#d4af37] transition-colors">Facebook</a>
            <a href="#" className="px-3 py-1.5 rounded-lg bg-[#0d1624] border border-gray-800 text-white hover:text-[#d4af37] transition-colors">Instagram</a>
          </div>
          <p className="text-gray-500 mt-2">Almadies, Dakar, Sénégal</p>
          <p className="text-gray-500">+221 77 123 45 67</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900 pt-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Luxoria Hotel Dakar. Tous droits réservés.
      </div>
    </footer>
  );
};