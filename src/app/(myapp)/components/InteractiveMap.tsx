'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRouter } from 'next/navigation';

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
      const bounds = L.latLngBounds(locations.map((location) => [location.lat, location.lng]));
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [locations, map]);

  return null;
}

// Map events for selector mode and general map clicks
interface MapEventsProps {
  onLocationSelect: (lat: number, lng: number) => void;
  onMapClick?: (lat: number, lng: number) => void;
}

function MapEvents({ onLocationSelect, onMapClick }: MapEventsProps) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationSelect(lat, lng);
      
      // Also call the general map click handler
      if (onMapClick) {
        onMapClick(lat, lng);
      }
    },
  });
  return null;
}

export function InteractiveMap({
  initialCenter = [16.5388, -24.0132], // Default to Cape Verde
  initialZoom = 10,
  height = '500px',
  width = '100%',
  mode = 'locations',
  locations = [],
  onLocationClick,
  showPopup = true,
  autoFitBounds = true,
  onLocationSelect,
  selectedLocation = null,
  showHomeButton = false,
  homeRoute = '/',
  showCurrentLocationButton = false,
  onCurrentLocationFound,
}: {
  // Map display properties
  initialCenter?: [number, number];
  initialZoom?: number;
  height?: string;
  width?: string;

  // Mode: 'locations' for displaying multiple locations, 'selector' for selecting a single location
  mode?: 'locations' | 'selector';

  // For locations mode
  locations?: Location[];
  onLocationClick?: (location: Location) => void;
  showPopup?: boolean;
  autoFitBounds?: boolean;

  // For selector mode
  onLocationSelect?: (lat: number, lng: number) => void;
  selectedLocation?: [number, number] | null;

  // Navigation
  showHomeButton?: boolean;
  homeRoute?: string;
  
  // Geolocation
  showCurrentLocationButton?: boolean;
  onCurrentLocationFound?: (lat: number, lng: number) => void;
}) {
  const mapRef = useRef<L.Map>(null);
  const router = useRouter();
  const [currentLocation, setCurrentLocation] = useState<[number, number] | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [clickedCoordinates, setClickedCoordinates] = useState<[number, number] | null>(null);

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

  const handleMapClick = (lat: number, lng: number) => {
    const coordinates: [number, number] = [lat, lng];
    setClickedCoordinates(coordinates);
    
    // Pass coordinates to onCurrentLocationFound callback
    if (onCurrentLocationFound) {
      onCurrentLocationFound(lat, lng);
    }
  };

  const handleGoHome = () => {
    if (currentLocation && showCurrentLocationButton) {
      // If we have current location and geolocation is enabled, go to current location
      if (mapRef.current) {
        mapRef.current.setView(currentLocation, 15);
      }
    } else {
      // Otherwise, navigate to home route
      router.push(homeRoute);
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    // Prevent multiple simultaneous requests
    if (isLoadingLocation) {
      return;
    }

    setIsLoadingLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const location: [number, number] = [latitude, longitude];
          
          setCurrentLocation(location);
          
          // Move map to current location
          if (mapRef.current) {
            mapRef.current.setView(location, 15);
          }
          
          // Call callback if provided
          if (onCurrentLocationFound) {
            onCurrentLocationFound(latitude, longitude);
          }
        } catch (error) {
          console.error('Error processing location:', error);
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        let errorMessage = 'Unable to retrieve your location.';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location permissions in your browser.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out. Please try again.';
            break;
          default:
            errorMessage = 'An unknown error occurred while retrieving your location.';
            break;
        }
        
        alert(errorMessage);
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000, // Increased timeout
        maximumAge: 300000 // 5 minutes cache
      }
    );

    // Fallback timeout to ensure loading state is reset
    setTimeout(() => {
      setIsLoadingLocation(false);
    }, 20000);
  };

  return (
    <div className="w-full">

      <div style={{ height, width }} className="border border-gray-300 rounded-lg overflow-hidden relative">
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

          {/* Handle map clicks for both selector mode and general map clicks */}
          {onLocationSelect && (
            <MapEvents 
              onLocationSelect={onLocationSelect} 
              onMapClick={handleMapClick}
            />
          )}

          {/* Locations mode - fit bounds to all markers */}
          {mode === 'locations' && autoFitBounds && <FitBounds locations={locations} />}

          {/* Render locations markers */}
          {mode === 'locations' &&
            locations.map((location) => (
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

          {/* Selector mode - show selected location marker */}
          {mode === 'selector' && selectedLocation && (
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

          {/* Current location marker */}
          {currentLocation && (
            <Marker 
              position={currentLocation}
              icon={L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="
                  background-color: #10b981;
                  width: 25px;
                  height: 25px;
                  border-radius: 50%;
                  border: 3px solid white;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                  <div style="
                    width: 8px;
                    height: 8px;
                    background-color: white;
                    border-radius: 50%;
                  "></div>
                </div>`,
                iconSize: [25, 25],
                iconAnchor: [12, 12],
              })}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold text-lg mb-2 text-green-600">
                    Your Current Location
                  </h3>
                  <div className="text-sm text-gray-500">
                    <div>Lat: {currentLocation[0].toFixed(6)}</div>
                    <div>Lng: {currentLocation[1].toFixed(6)}</div>
                  </div>
                </div>
              </Popup>
            </Marker>
          )}

          {/* Clicked coordinates marker */}
          {clickedCoordinates && (
            <Marker 
              position={clickedCoordinates}
              icon={L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="
                  background-color: #3b82f6;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: 2px solid white;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                "></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10],
              })}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold text-lg mb-2 text-blue-600">
                    Clicked Location
                  </h3>
                  <div className="text-sm text-gray-500">
                    <div>Lat: {clickedCoordinates[0].toFixed(6)}</div>
                    <div>Lng: {clickedCoordinates[1].toFixed(6)}</div>
                  </div>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
        
        {/* Current Location Button Overlay */}
        {showCurrentLocationButton && (
          <div className="absolute top-4 right-4 z-[1000]">
            <button
              onClick={getCurrentLocation}
              disabled={isLoadingLocation}
              className="bg-white shadow-lg hover:shadow-xl rounded-md p-2 border border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              title={isLoadingLocation ? 'Getting Location...' : 'Get My Location'}
            >
              {isLoadingLocation ? (
                <svg className="w-5 h-5 text-green-600 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InteractiveMap;
