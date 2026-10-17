import {type Room } from '../types';

export const roomsData: Room[] = [
  {
    id: 'standard',
    name: 'Chambre Standard',
    price: 80000,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    description: 'Une chambre confortable et élégante, conçue pour un séjour de détente avec tout le nécessaire moderne.',
    features: ['Lit Queen-size', 'Climatisation', 'Wi-Fi gratuit', 'Salle de bain privative'],
    capacity: '2 Personnes'
  },
  {
    id: 'deluxe',
    name: 'Chambre Deluxe',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    description: 'Offrez-vous une vue imprenable et un espace de vie raffiné avec des équipements haut de gamme.',
    features: ['Lit King-size', 'Vue sur mer', 'Mini-bar inclus', 'Service de chambre 24/7'],
    capacity: '2-3 Personnes'
  },
  {
    id: 'suite',
    name: 'Suite Prestige',
    price: 200000,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
    description: 'Le summum du luxe à Dakar. Salon privé, finitions de prestige et prestations exclusives.',
    features: ['Lit King-size', 'Salon privé', 'Petit-déjeuner inclus', 'Accès spa & piscine illimité'],
    capacity: '4 Personnes'
  }
];