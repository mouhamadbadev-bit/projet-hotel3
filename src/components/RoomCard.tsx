import React from 'react';
import {type  Room } from '../types';

interface RoomCardProps {
  room: Room;
  onDetails: (room: Room) => void;
  onBook: (roomName: string) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onDetails, onBook }) => {
  return (
    <div className="bg-[#0d1624] border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all hover:border-[#d4af37]/50">
      <div className="h-56 overflow-hidden relative">
        <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 right-3 bg-[#0d1624]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#d4af37]">
          {room.price.toLocaleString()} FCFA / nuit
        </span>
      </div>
      <div className="p-6 flex flex-col grow justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold mb-2 text-white">{room.name}</h3>
          <p className="text-gray-400 text-xs mb-4 line-clamp-2">{room.description}</p>
        </div>
        <div className="space-y-3 pt-4 border-t border-gray-800/60">
          <div className="flex gap-2">
            <button 
              onClick={() => onDetails(room)}
              className="w-1/2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
            >
              Détails
            </button>
            <button 
              onClick={() => onBook(room.name)}
              className="w-1/2 bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};