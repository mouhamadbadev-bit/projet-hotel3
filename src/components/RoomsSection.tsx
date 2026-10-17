import React, { useState } from 'react';
import { RoomCard } from './RoomCard';
import { roomsData } from '../data/roomsData';
import {type Room } from '../types';
import { X, Check, Users, BedDouble } from 'lucide-react';

interface RoomsSectionProps {
  onBookReservation: (roomName: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onBookReservation }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="chambres" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">Nos Chambres</span>
        <h2 className="text-3xl font-serif font-bold mt-1">Confort & Élégance</h2>
        <p className="text-gray-400 text-sm mt-2">Des chambres pensées pour votre bien-être absolu, alliant design moderne et vues imprenables.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {roomsData.map((room) => (
          <RoomCard 
            key={room.id} 
            room={room} 
            onDetails={(r) => setSelectedRoom(r)} 
            onBook={onBookReservation} 
          />
        ))}
      </div>

      {/* Modale de Détails intégrée automatiquement si aucun autre fichier n'est créé */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d1624] border border-[#d4af37]/40 rounded-2xl text-white shadow-2xl">
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 cursor-pointer z-20 bg-[#0d1624]/80 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-64 sm:h-80 w-full">
              <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0d1624] via-transparent to-transparent"></div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">Hôtel Dakar Prestige</span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-1">{selectedRoom.name}</h2>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-bold text-[#d4af37]">{selectedRoom.price.toLocaleString()} FCFA</span>
                  <span className="text-gray-400 text-xs block">/ nuit</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{selectedRoom.description}</p>

              <div className="border-t border-gray-800 pt-4">
                <h4 className="text-sm font-semibold text-[#d4af37] mb-3 uppercase tracking-wider">Équipements & Caractéristiques</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Users className="w-4 h-4 text-[#d4af37]" />
                    <span>Capacité : {selectedRoom.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <BedDouble className="w-4 h-4 text-[#d4af37]" />
                    <span>Type : {selectedRoom.name}</span>
                  </div>
                  {selectedRoom.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-800">
                <button
                  onClick={() => {
                    const name = selectedRoom.name;
                    setSelectedRoom(null);
                    onBookReservation(name);
                  }}
                  className="w-full bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium py-3 rounded-lg text-xs transition-colors shadow-lg cursor-pointer"
                >
                  Réserver cette chambre
                </button>
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-xs transition-colors cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};