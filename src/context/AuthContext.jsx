import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  const logout = () => {
    setAuth({});
  };

  const login = ({ user, profilePicture, id, email }) => {
    setAuth({
      user,
      profilePicture,
      id,
      email,
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
