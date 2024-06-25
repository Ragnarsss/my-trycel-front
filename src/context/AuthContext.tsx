import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: any; // Puedes reemplazar 'any' con un tipo más específico para tu usuario
  logout: () => void;
  refreshToken: string | null;
  authToken: string | null;
  register: (userName: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const login = (user: any) => {
    setUser(user);
    // Aquí puedes agregar lógica adicional para manejar el inicio de sesión, como guardar en localStorage
  };

  const logout = () => {
    setUser(null);
    // Aquí puedes agregar lógica adicional para manejar el cierre de sesión
  };

  const register = () => {};
  return (
    <AuthContext.Provider
      value={{ user, login, logout, authToken, refreshToken, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
