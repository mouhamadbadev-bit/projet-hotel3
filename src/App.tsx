import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { ServicesSection } from './components/ServicesSection';
import { SpecialOffer } from './components/SpecialOffer';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [preselectedRoomName, setPreselectedRoomName] = useState<string>('Chambre Standard');

  const handleOpenReservation = (roomName?: string) => {
    if (roomName) {
      setPreselectedRoomName(roomName);
    }
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070d16] text-white font-sans">
      {/* Barre de navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onOpenReservation={() => handleOpenReservation()} 
      />

      {/* Affichage des sections en fonction du menu ou défilement global */}
      <main>
        <Hero onOpenReservation={handleOpenReservation} />
        <RoomsSection onBookReservation={handleOpenReservation} />
        <ServicesSection />
        <SpecialOffer onOpenReservation={() => handleOpenReservation()} />
        
        {/* Section Blog / Actualités simple */}
        <section id="blog" className="py-20 max-w-5xl mx-auto px-4 text-center">
          <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">Actualités</span>
          <h2 className="text-3xl font-serif font-bold mt-1 mb-6">Notre Blog & Événements</h2>
          <p className="text-gray-400 text-sm">Découvrez les actualités culturelles de Dakar et les nouveautés de l'hôtel Luxoria pour agrémenter votre séjour.</p>
        </section>
      </main>

      {/* Pied de page */}
      <Footer setActiveSection={setActiveSection} />

      {/* Modale de réservation globale connectée à Formspree */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
        preselectedRoom={preselectedRoomName}
      />
    </div>
  );
}

export default App;