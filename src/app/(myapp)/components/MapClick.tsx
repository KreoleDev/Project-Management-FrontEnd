'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapClickProps {
  onLocationSelect: (lat: number, lng: number) => void;
  initialCenter?: [number, number];
  initialZoom?: number;
  height?: string;
  width?: string;
  selectedLocation?: [number, number] | null;
}

interface MapEventsProps {
  onLocationSelect: (lat: number, lng: number) => void;
}

function MapEvents({ onLocationSelect }: MapEventsProps) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationSelect(lat, lng);
    },
  });
  return null;
}

function MapClick({
  onLocationSelect,
  initialCenter = [16.5388, -24.0132], // Default to Cape Verde
  initialZoom = 10,
  height = '400px',
  width = '100%',
  selectedLocation = null,
}: MapClickProps) {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    // Ensure the map is properly initialized
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  return (
    <div className="w-full">
      <div style={{ height, width }} className="border border-gray-300 rounded-lg overflow-hidden">
        <MapContainer
          center={initialCenter}
          zoom={initialZoom}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapEvents onLocationSelect={onLocationSelect} />

          {selectedLocation && (
            <Marker position={selectedLocation}>
              <Popup>
                Selected Location
                <br />
                Lat: {selectedLocation[0].toFixed(6)}
                <br />
                Lng: {selectedLocation[1].toFixed(6)}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      <div className="mt-2 text-sm text-gray-600">Click on the map to select a location</div>
    </div>
  );
}

export { MapClick };
