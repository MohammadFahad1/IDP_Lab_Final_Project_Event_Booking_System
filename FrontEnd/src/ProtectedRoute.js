import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
