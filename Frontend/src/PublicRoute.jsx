import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PublicRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (user) {
    // अगर पहले से login है तो Home पर भेज दो
    return <Navigate to="/Home" replace />;
  }

  return children;
}

export default PublicRoute;
