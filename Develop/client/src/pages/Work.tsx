import { MapPin, Clock } from "lucide-react";
import JobMap from "../API/JobMap";

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
        <div className="flex items-center justify-center">
          <JobMap
            jobs={[
              {
                latitude: 35.251555,
                longitude: -80.737663,
                id: "1",
                title: "Full Stack Developer",
                company: "Tech Co",
                location: "Remote",
                salary_range: 100000,
              },
            ]}
          ></JobMap>
        </div>
        <br></br>
      </div>
    </div>
  );
}
