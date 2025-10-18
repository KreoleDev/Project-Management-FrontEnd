'use client';

import { useState } from 'react';
import MapClick from './MapClick';

export default function MapExample() {
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  const handleLocationSelect = (lat: number, lng: number) => {
    setSelectedLocation([lat, lng]);
    setCoordinates({ lat, lng });
    console.log('Selected coordinates:', { lat, lng });
  };

  const clearSelection = () => {
    setSelectedLocation(null);
    setCoordinates(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Map Location Selector</h2>
      
      <div className="mb-4">
        <MapClick
          onLocationSelect={handleLocationSelect}
          selectedLocation={selectedLocation}
          height="500px"
          initialCenter={[40.7128, -74.0060]} // New York
          initialZoom={13}
        />
      </div>

      {coordinates && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Selected Coordinates:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Latitude (X):</label>
              <input
                type="number"
                value={coordinates.lat}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Longitude (Y):</label>
              <input
                type="number"
                value={coordinates.lng}
                readOnly
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>
          <button
            onClick={clearSelection}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Clear Selection
          </button>
        </div>
      )}
    </div>
  );
}
