'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const FASTAPI_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

// Mock user for demo/development use
const MOCK_USER: User = {
  id: 'mock-user-001',
  email: 'demo@heartmap.app',
  name: 'Demo User',
  created_at: new Date().toISOString(),
};
const MOCK_TOKEN = 'mock-jwt-token-heartmap-demo';
const MOCK_EMAIL = 'demo@heartmap.app';
const MOCK_PASSWORD = 'demo1234';

export interface User {
  id: string;
  email: string;
  name?: string;
  created_at?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name?: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore session from localStorage
    const storedToken = localStorage.getItem('heartmap_token');
    const storedUser = localStorage.getItem('heartmap_user');
    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('heartmap_token');
        localStorage.removeItem('heartmap_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock user bypass — no FastAPI call needed
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      localStorage.setItem('heartmap_token', MOCK_TOKEN);
      localStorage.setItem('heartmap_user', JSON.stringify(MOCK_USER));
      setToken(MOCK_TOKEN);
      setUser(MOCK_USER);
      return;
    }

    const res = await fetch(`${FASTAPI_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || 'Invalid credentials');
    }
    const data = await res.json();
    const accessToken: string = data.access_token;
    const userData: User = data.user;
    localStorage.setItem('heartmap_token', accessToken);
    localStorage.setItem('heartmap_user', JSON.stringify(userData));
    setToken(accessToken);
    setUser(userData);
  };

  const signUp = async (email: string, password: string, name?: string) => {
    // Mock user bypass for sign-up as well
    if (email === MOCK_EMAIL) {
      localStorage.setItem('heartmap_token', MOCK_TOKEN);
      localStorage.setItem('heartmap_user', JSON.stringify({ ...MOCK_USER, name: name || MOCK_USER.name }));
      setToken(MOCK_TOKEN);
      setUser({ ...MOCK_USER, name: name || MOCK_USER.name });
      return;
    }

    const res = await fetch(`${FASTAPI_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || 'Registration failed');
    }
    const data = await res.json();
    const accessToken: string = data.access_token;
    const userData: User = data.user;
    localStorage.setItem('heartmap_token', accessToken);
    localStorage.setItem('heartmap_user', JSON.stringify(userData));
    setToken(accessToken);
    setUser(userData);
  };

  const signOut = () => {
    localStorage.removeItem('heartmap_token');
    localStorage.removeItem('heartmap_user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
