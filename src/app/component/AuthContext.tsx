'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(savedUser);
  }, []);

  async function login(email: string, password: string) {
    try {
      await axios.post('/api/login', { email, password });
      setUser(email);
      localStorage.setItem('user', email);
      return true;
    } catch {
      return false;
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
