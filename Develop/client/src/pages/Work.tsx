import React from "react";
import JobMap from "../api/JobMap";

export function Work() {
  return (
    <div>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Work Opportunities</h1>
        {/* Job Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Full Stack Developer</h2>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2426&amp;q=80"
                  alt="E-commerce Platform Development"
                  className="w-32 h-32 object-cover rounded-lg ml-4 jutstify-self-end"
                ></img>
                <p className="text-gray-600 mb-4">
                  Looking for a full-stack developer to build a modern
                  e-commerce platform. The project involves developing both
                  frontend and backend components, implementing payment
                  processing, and setting up a product management system.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Duration
                    </h4>
                    <p className="text-gray-900">6 months</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Budget
                    </h4>
                    <p className="text-gray-900">$30,000 - $40,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin text-gray-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Location
                    </h4>
                    <p className="text-gray-900">Remote (US)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Experience Required
                    </h4>
                    <p className="text-gray-900">3+ years</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-file-check text-gray-500"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="m9 15 2 2 4-4"></path>
                    </svg>
                    <h4 className="text-sm font-medium text-gray-700">
                      References Required
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      React
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      Node.js
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      AWS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Apply Now - Comming Soon!
          </button>
        </div>
        {/* Job Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Carpenter</h2>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2426&amp;q=80"
                  alt="E-commerce Platform Development"
                  className="w-32 h-32 object-cover rounded-lg ml-4 jutstify-self-end"
                ></img>
                <p className="text-gray-600 mb-4">
                  Seeking an experienced carpenter for residential remodeling
                  projects. The role involves framing, installing cabinetry, and
                  finishing work. Must have own tools and reliable
                  transportation.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Duration
                    </h4>
                    <p className="text-gray-900">1 month</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Budget
                    </h4>
                    <p className="text-gray-900">$2,000 - $5,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin text-gray-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Location
                    </h4>
                    <p className="text-gray-900">Charleston, SC (US)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Experience Required
                    </h4>
                    <p className="text-gray-900">5+ years</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-file-check text-gray-500"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="m9 15 2 2 4-4"></path>
                    </svg>
                    <h4 className="text-sm font-medium text-gray-700">
                      References Required
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      Finish Carpentry
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      Framing
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      Cabinet Installation
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      Remodeling
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      Custom Builds
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Apply Now - Comming Soon!
          </button>
        </div>
        {/* Job Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Coding Teacher</h2>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2426&amp;q=80"
                  alt="E-commerce Platform Development"
                  className="w-32 h-32 object-cover rounded-lg ml-4 jutstify-self-end"
                ></img>
                <p className="text-gray-600 mb-4">
                  Seeking a passionate coding teacher to instruct students in
                  modern web development technologies. The role involves
                  creating lesson plans, delivering lectures, and providing
                  hands-on coding exercises. Must have experience with
                  JavaScript, React, and Node.js.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Duration
                    </h4>
                    <p className="text-gray-900">12 months</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Budget
                    </h4>
                    <p className="text-gray-900">$80,000 - $90,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin text-gray-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Location
                    </h4>
                    <p className="text-gray-900">Atlanta, GA (US)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">
                      Experience Required
                    </h4>
                    <p className="text-gray-900">10+ years</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-file-check text-gray-500"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="m9 15 2 2 4-4"></path>
                    </svg>
                    <h4 className="text-sm font-medium text-gray-700">
                      References Required
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      React
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      Node.js
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700">
                      JavaScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Apply Now - Coming Soon !
          </button>
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
