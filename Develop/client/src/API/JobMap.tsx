import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Job } from "@/types";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";

// Fix Leaflet default marker icon
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface JobMapProps {
  jobs: Job[];
  onJobSelect?: (job: Job) => void;
}

export default function JobMap({ jobs, onJobSelect }: JobMapProps) {
  // State to store the user's current location
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Use the Geolocation API to get the current position when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Create an array of coordinates for the job markers
  const jobLocations: [number, number][] = jobs.map((job) => [
    job.latitude,
    job.longitude,
  ]);

  // If current location is available, add it to the list of coordinates for bounds calculation
  if (currentLocation) {
    jobLocations.push([currentLocation.lat, currentLocation.lng]);
  }

  // Calculate the map bounds so that all markers are visible
  const bounds = L.latLngBounds(jobLocations);

  return (
    <div className="h-[400px] w-[1500px] rounded-lg overflow-hidden border border-gray-300">
      <MapContainer
        bounds={bounds}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        className="z-0" // Ensure map stays below modals/dropdowns
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {jobs.map((job) => (
          <Marker key={job.id} position={[job.latitude, job.longitude]}>
            <Popup>{job.title}</Popup>
          </Marker>
        ))}
        {currentLocation && (
          <Marker position={[currentLocation.lat, currentLocation.lng]}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
