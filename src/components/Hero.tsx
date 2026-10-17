import React from 'react';
import { ArrowRight, Calendar, Users } from 'lucide-react';

interface HeroProps {
  onOpenReservation: (roomName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="accueil" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxoria Hotel Dakar" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#070d16] via-transparent to-[#070d16]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">Bienvenue chez Luxoria Hotel</span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold mt-2 mb-6">L’élégance. Le confort.<br />Une expérience unique.</h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-10">
          Découvrez un lieu au cœur de Dakar où le luxe rencontre l'hospitalité. Détendez-vous, nous prenons soin du reste.
        </p>

        {/* Barre de recherche rapide de disponibilité */}
        <div className="max-w-4xl mx-auto bg-[#0d1624]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-2xl p-4 sm:p-6 shadow-2xl grid grid-cols-1 sm:grid-cols-4 gap-4 text-left items-center">
          <div>
            <label className="block text-[11px] text-[#d4af37] uppercase font-semibold mb-1">Arrivée</label>
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#132035] p-2.5 rounded-lg border border-gray-800">
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              <span>18 Mai 2026</span>
            </div>
          </div>
          <div>
            <label className="block text-[11px] text-[#d4af37] uppercase font-semibold mb-1">Départ</label>
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#132035] p-2.5 rounded-lg border border-gray-800">
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              <span>20 Mai 2026</span>
            </div>
          </div>
          <div>
            <label className="block text-[11px] text-[#d4af37] uppercase font-semibold mb-1">Voyageurs</label>
            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#132035] p-2.5 rounded-lg border border-gray-800">
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span>2 Adultes, 0 Enfant</span>
            </div>
          </div>
          <div className="flex items-end">
            <button 
              onClick={() => onOpenReservation()}
              className="w-full bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium py-3 rounded-lg text-xs transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Vérifier <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};