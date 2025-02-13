import { LogOut, Camera, Mail } from 'lucide-react';
import { useAuthStore } from '../lib/store';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 p-1 bg-indigo-600 text-white rounded-full">
              <Camera size={16} />
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user?.email}</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              <span>{user?.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}