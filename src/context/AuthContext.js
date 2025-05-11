import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);
  const [isUserAuthLoading, setIsUserAuthLoading] = useState(true);

  // Check if the user is SignedIn when the app loads
  useEffect(() => {
    const storedUserAuth = Cookies.get("userAuth");

    if (storedUserAuth) {
      setUserAuth(() => JSON.parse(storedUserAuth));
    }
    setIsUserAuthLoading(() => false);
  }, []);

  // Save user Auth to cookies when ever it changes.
  useEffect(() => {
    if (userAuth) {
      Cookies.set("userAuth", JSON.stringify(userAuth), { expires: 1 });
    } else {
      Cookies.remove("userAuth");
    }
    setIsUserAuthLoading(() => false)
  }, [userAuth]);

  const login = (userData) => setUserAuth(userData);
  const logout = () => setUserAuth(() => null);
  const updateUser = (newData) =>
    setUserAuth((prevData) => ({ ...prevData, ...newData }));

  return (
    <AuthContext.Provider value={{ userAuth, login, logout, updateUser, isUserAuthLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
