import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = () => {
  const authInfo = {name: 'Fahad'}

  return (
    <AuthContext.Provider value={authInfo}>
      
    </AuthContext.Provider>
  );
};
export default AuthProvider;