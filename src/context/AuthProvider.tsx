import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from 'firebase/auth';
import { logoutUser, subscribeToAuthChanges } from '../services/authService';
import { AuthContext } from './authContext';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  if (authLoading) {
    return <p>Loading authentication...</p>;
  }

  return (
    <AuthContext.Provider value={{ user, authLoading, logOut: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
