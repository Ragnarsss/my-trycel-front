import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

type AuthContextType = {
  refreshToken: string | null;
  user: any | null;
  authToken: string | null;
  register: (userName: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
