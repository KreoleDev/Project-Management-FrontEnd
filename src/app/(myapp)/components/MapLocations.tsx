'use client';

import { useState } from 'react';
import { Map } from './Map';

interface Location {
  id: string | number;
  lat: number;
  lng: number;
  title?: string;
  description?: string;
  color?: string;
}

function MapLocations({ onLocationClick }: { onLocationClick: (location: Location) => void }) {
  // Dados de exemplo com localizações em Cabo Verde
  const [locations] = useState<Location[]>([
    {
      id: 1,
      lat: 14.9167,
      lng: -23.5167,
      title: 'Praia',
      description: 'Capital de Cabo Verde',
      color: 'red',
    },
    {
      id: 2,
      lat: 16.8901,
      lng: -24.9884,
      title: 'Mindelo',
      description: 'Cidade cultural de São Vicente',
      color: 'blue',
    },
    {
      id: 3,
      lat: 15.1367,
      lng: -23.6089,
      title: 'Assomada',
      description: 'Cidade de Santiago',
      color: 'green',
    },
    {
      id: 4,
      lat: 16.1775,
      lng: -22.9172,
      title: 'Sal Rei',
      description: 'Cidade de Boa Vista',
      color: 'yellow',
    },
    {
      id: 5,
      lat: 14.8667,
      lng: -24.3333,
      title: 'Vila do Maio',
      description: 'Cidade de Maio',
      color: 'purple',
    },
  ]);

  const handleLocationClick = (location: Location) => {
    onLocationClick?.(location);
  };
  return (
    <Map
      locations={locations}
      onLocationClick={handleLocationClick}
      showPopup={true}
      autoFitBounds={true}
      height="600px"
    />
  );
}

export { MapLocations };
