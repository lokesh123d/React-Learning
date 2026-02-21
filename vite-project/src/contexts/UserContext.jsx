import { createContext, useContext, useState } from "react"

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Guest", email: "" });

  const login = (name, email) => setUser({ name, email });
  const logout = () => setUser({ name: "Guest", email: "" });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
