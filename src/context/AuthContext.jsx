import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    profilePicture: null,
    id: null,
  });

  const logout = () => {
    setAuth({
      user: null,
      profilePicture: null,
      id: null,
    });
  };

  const login = ({ user, profilePicture, id }) => {
    console.log("🚀 ~ login ~ id:", id);
    console.log("🚀 ~ login ~ profilePicture:", profilePicture);
    console.log("🚀 ~ login ~ user:", user);
    setAuth({
      user,
      profilePicture,
      id,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
