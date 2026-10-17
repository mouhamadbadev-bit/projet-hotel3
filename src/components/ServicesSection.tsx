import React from 'react';
import { Clock, ShieldCheck, Wifi, Utensils, Sparkles, Waves } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    { icon: Clock, title: 'Réception 24/7', desc: 'Notre équipe est disponible à tout moment pour vous assister.' },
    { icon: Utensils, title: 'Restaurant Gastronomique', desc: 'Savourez des plats raffinés préparés par nos chefs.' },
    { icon: Sparkles, title: 'Spa & Bien-être', desc: 'Détendez-vous dans notre spa avec soins et massages.' },
    { icon: Waves, title: 'Piscine à débordement', desc: 'Profitez d’une vue époustouflante depuis notre piscine.' },
    { icon: ShieldCheck, title: 'Paiement Sécurisé', desc: 'Transactions protégées et garanties sans aucun risque.' },
    { icon: Wifi, title: 'Wi-Fi Haut Débit', desc: 'Connexion fibre optique gratuite dans tout l’établissement.' },
  ];

  return (
    <section id="services" className="py-20 bg-[#0b121d] border-y border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">Prestations</span>
        <h2 className="text-3xl font-serif font-bold mt-1 mb-12">Nos Services Exclusifs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => {
            const IconComponent = s.icon;
            return (
              <div key={index} className="p-6 bg-[#0d1624] rounded-xl border border-gray-800 hover:border-[#d4af37]/30 transition-colors">
                <IconComponent className="w-8 h-8 text-[#d4af37] mx-auto mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2 text-white">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};