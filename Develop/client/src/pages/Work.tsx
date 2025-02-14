import React from "react";
import { MapPin, Clock } from "lucide-react";
import JobMap from "../api/JobMap";

export function Work() {
  return (
    <div>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Work Opportunities</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Full Stack Developer</h2>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>Remote</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>Full Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Coding Teacher</h2>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>In-Person</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>Part Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Carpenter</h2>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>In-Jobsites</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>Paid Intern</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <JobMap
            jobs={[
              {
                latitude: 35.227085,
                longitude: -80.843124,
                id: "1",
                title: "Full Stack Developer",
                company: "Tech Co",
                location: "Remote",
                salary_range: 100000,
              },
              {
                latitude: 33.748997,
                longitude: -84.387985,
                id: "2",
                title: "Coding Teacher",
                company: "The Peach Bootcamp School",
                location: "In Person",
                salary_range: 80000,
              },
              {
                latitude: 32.77647,
                longitude: -79.93103,
                id: "3",
                title: "Carpenter",
                company: "Remodeling Co",
                location: "On Site",
                salary_range: 65000,
              },
            ]}
          ></JobMap>
        </div>
        <br></br>
      </div>
    </div>
  );
}
