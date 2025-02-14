import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  fullName?: string;
  specialty?: string;
  location?: string;
  phone?: string;
  imageUrl?: string;
}

interface AuthState {
  user: User | null;
  token: string | null; // Add the token property
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void; // Add a setter for the token
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null, // Initialize the token property
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }), // Add the setToken function
}));