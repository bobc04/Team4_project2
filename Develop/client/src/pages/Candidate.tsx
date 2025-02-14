//import React from "react";
import { Mail, Phone, Briefcase, MapPin } from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialty: string;
  location: string;
  imageUrl?: string;
}

const initialCandidates: Candidate[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@gmail.com",
    phone: "+1 (555) 123-4567",
    specialty: "Full Stack Development",
    location: "Raleigh, NC",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: "2",
    name: "Luis Chen",
    email: "Luis.Chen@yahoo.com",
    phone: "+1 (555) 103-4897",
    specialty: "Coding Teacher",
    location: "Atlanta, GA",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "3",
    name: "Michael Smith",
    email: "Michael.smith@icloud.com",
    phone: "+1 (850) 485-4632",
    specialty: "Carpenter",
    location: "Charleston, SC",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
];

export function Candidates() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Available Candidates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                {candidate.imageUrl && (
                  <img
                    src={candidate.imageUrl}
                    alt={candidate.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {candidate.name}
                  </h3>
                  <p className="text-gray-600">{candidate.specialty}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{candidate.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={18} />
                  <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={18} />
                  <a href={`tel:${candidate.phone}`}>{candidate.phone}</a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase size={18} />
                  <span>{candidate.specialty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
