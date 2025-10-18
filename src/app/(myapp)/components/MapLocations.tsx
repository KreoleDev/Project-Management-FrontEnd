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

function MapLocations() {
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

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [showPopup, setShowPopup] = useState(true);
  const [autoFitBounds, setAutoFitBounds] = useState(true);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    console.log('Clicked location:', location);
  };

  const addRandomLocation = () => {
    const randomLat = 14 + Math.random() * 3; // Entre 14 e 17
    const randomLng = -25 + Math.random() * 2; // Entre -25 e -23
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'indigo'];

    const newLocation: Location = {
      id: Date.now(),
      lat: randomLat,
      lng: randomLng,
      title: `Location ${locations.length + 1}`,
      description: 'Random location',
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    // Note: In a real app, you would update the locations state here
    console.log('Would add new location:', newLocation);
  };

  return (
    <>
      {/* Map */}
      <div className="mb-4">
        <Map
          locations={locations}
          onLocationClick={handleLocationClick}
          showPopup={showPopup}
          autoFitBounds={autoFitBounds}
          height="600px"
        />
      </div>

      {/* Selected Location Info */}
      {selectedLocation && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Localização Selecionada:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Título:</label>
              <input
                type="text"
                value={selectedLocation.title || ''}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cor:</label>
              <input
                type="text"
                value={selectedLocation.color || 'blue'}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Latitude:</label>
              <input
                type="number"
                value={selectedLocation.lat}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Longitude:</label>
              <input
                type="number"
                value={selectedLocation.lng}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>
          {selectedLocation.description && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Descrição:</label>
              <p className="mt-1 text-gray-600">{selectedLocation.description}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export { MapLocations };
