'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface Location {
  id: string | number;
  lat: number;
  lng: number;
  title?: string;
  description?: string;
  color?: string;
}

interface MapLocationsProps {
  locations: Location[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  width?: string;
  onLocationClick?: (location: Location) => void;
  showPopup?: boolean;
  autoFitBounds?: boolean;
}

// Custom marker colors
const getMarkerIcon = (color: string = 'blue') => {
  const colors = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#10b981',
    yellow: '#f59e0b',
    purple: '#8b5cf6',
    pink: '#ec4899',
    indigo: '#6366f1',
    gray: '#6b7280',
  };

  const markerColor = colors[color as keyof typeof colors] || colors.blue;

  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: ${markerColor};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

// Component to fit map bounds to all markers
function FitBounds({ locations }: { locations: Location[] }) {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map(location => [location.lat, location.lng])
      );
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [locations, map]);

  return null;
}

export function Map({
  locations = [],
  center = [16.5388, -24.0132], // Cape Verde
  zoom = 10,
  height = '500px',
  width = '100%',
  onLocationClick,
  showPopup = true,
  autoFitBounds = true,
}: MapLocationsProps) {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, [locations]);

  const handleMarkerClick = (location: Location) => {
    if (onLocationClick) {
      onLocationClick(location);
    }
  };

  return (
    <div className="w-full">
      <div style={{ height, width }} className="border border-gray-300 rounded-lg overflow-hidden">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {autoFitBounds && <FitBounds locations={locations} />}

          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              icon={getMarkerIcon(location.color)}
              eventHandlers={{
                click: () => handleMarkerClick(location),
              }}
            >
              {showPopup && (
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold text-lg mb-2">
                      {location.title || `Location ${location.id}`}
                    </h3>
                    {location.description && (
                      <p className="text-gray-600 mb-2">{location.description}</p>
                    )}
                    <div className="text-sm text-gray-500">
                      <div>Lat: {location.lat.toFixed(6)}</div>
                      <div>Lng: {location.lng.toFixed(6)}</div>
                    </div>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-2 text-sm text-gray-600">
        Showing {locations.length} location{locations.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
