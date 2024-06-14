import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    // Optionally, add a loading spinner or message here
    return <div>Loading...</div>;
  }

  if (!user && !loading) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
