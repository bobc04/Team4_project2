import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Map as LeafletMap } from 'leaflet';
import { searchLocation } from '@/lib/geocoding';
import { Search } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default marker icon
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationPickerProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
  initialLocation?: { lat: number; lng: number };
}

function MapEvents({ onClick }: { onClick: (latlng: L.LatLng) => void }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}

export default function LocationPicker({ onLocationSelect, initialLocation }: LocationPickerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapRef, setMapRef] = useState<LeafletMap | null>(null);
  const [marker, setMarker] = useState<L.LatLng | null>(
    initialLocation ? L.latLng(initialLocation.lat, initialLocation.lng) : null
  );

  const defaultCenter: L.LatLngTuple = initialLocation 
    ? [initialLocation.lat, initialLocation.lng]
    : [51.505, -0.09];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const results = await searchLocation(searchQuery);
      if (results && results.length > 0) {
        const { lat, lon, display_name } = results[0];
        const newLatLng = L.latLng(parseFloat(lat), parseFloat(lon));
        setMarker(newLatLng);
        mapRef?.setView(newLatLng, 13);
        onLocationSelect({ lat: parseFloat(lat), lng: parseFloat(lon), address: display_name });
      }
    } catch (error) {
      console.error('Failed to search location:', error);
    }
  };

  const handleMapClick = async (latlng: L.LatLng) => {
    setMarker(latlng);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
      );
      const data = await response.json();
      onLocationSelect({ lat: latlng.lat, lng: latlng.lng, address: data.display_name });
    } catch (error) {
      console.error('Failed to reverse geocode:', error);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search location..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      <div className="h-[400px] rounded-lg overflow-hidden border border-gray-300">
        <MapContainer
          center={defaultCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          ref={setMapRef}
          className="z-0" // Ensure map stays below modals/dropdowns
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents onClick={handleMapClick} />
          {marker && <Marker position={marker} />}
        </MapContainer>
      </div>
    </div>
  );
}