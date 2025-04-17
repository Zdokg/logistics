import React from "react";
import { Navigate } from "react-router-dom";

// Check if user is authenticated and has the required role
const ProtectedRoute = ({ allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If role is not allowed
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  // Allowed — show the content
  return children;
};

export default ProtectedRoute;
