// RedirectLoggedIn.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react/prop-types
const RedirectLoggedIn = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth.loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default RedirectLoggedIn;
