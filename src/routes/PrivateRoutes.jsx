import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

export default function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <Button
        className="d-flex f justify-content-center align-items-center "
        variant="primary"
        disabled
      >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
}

/**
 * ------------------
 *        STEPS
 * -------------------
 * 1. Check user is loggged in or not
 * 2. if user is looged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. setup private router
 * **/
