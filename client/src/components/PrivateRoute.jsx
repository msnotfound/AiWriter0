import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const PrivateRoute = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loading animation
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
