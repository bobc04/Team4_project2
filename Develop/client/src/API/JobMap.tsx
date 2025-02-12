//import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Job } from "@/types";
import "leaflet/dist/leaflet.css";

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
  // Calculate map bounds based on job locations
  const bounds = L.latLngBounds(
    jobs.map((job) => [job.latitude, job.longitude])
  );

  return (
    <div className="h-[400px] w-[800px] rounded-lg overflow-hidden border border-gray-300">
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
          <Marker
            key={job.id}
            position={[job.latitude, job.longitude]}
            eventHandlers={{
              click: () => onJobSelect?.(job),
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-semibold text-lg text-gray-900">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                <p className="text-sm text-gray-500 mt-1">{job.salary_range}</p>
                <button
                  onClick={() => onJobSelect?.(job)}
                  className="mt-2 w-full px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
