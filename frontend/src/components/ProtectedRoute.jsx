import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log('ProtectedRoute - Token present:', !!token); // Debug log
  
  if (!token) {
    console.log('ProtectedRoute - No token found, redirecting to login'); // Debug log
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute; 