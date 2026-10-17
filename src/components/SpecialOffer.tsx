import React from 'react';
import { ShieldCheck, CalendarCheck, CreditCard } from 'lucide-react';

interface SpecialOfferProps {
  onOpenReservation: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" 
          alt="Offre spéciale" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#070d16] via-[#070d16]/90 to-[#070d16]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="space-y-4 max-w-xl text-center lg:text-left">
          <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">Offre Spéciale</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">Jusqu'à -20% pour tout séjour de 3 nuits ou plus</h2>
          <p className="text-gray-300 text-xs sm:text-sm">Réservez dès maintenant votre suite ou chambre deluxe et profitez de tarifs préférentiels exclusifs pour vos vacances à Dakar.</p>
          <button 
            onClick={onOpenReservation}
            className="mt-2 bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium px-8 py-3 rounded-lg text-xs transition-colors shadow-lg cursor-pointer inline-block"
          >
            Réserver maintenant
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full max-w-xs">
          <div className="flex items-center gap-3 p-4 bg-[#0d1624]/90 border border-gray-800 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
            <span className="text-xs font-medium text-gray-200">Meilleur tarif garanti</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-[#0d1624]/90 border border-gray-800 rounded-xl">
            <CalendarCheck className="w-6 h-6 text-[#d4af37]" />
            <span className="text-xs font-medium text-gray-200">Annulation gratuite</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-[#0d1624]/90 border border-gray-800 rounded-xl">
            <CreditCard className="w-6 h-6 text-[#d4af37]" />
            <span className="text-xs font-medium text-gray-200">Paiement sécurisé</span>
          </div>
        </div>
      </div>
    </section>
  );
};