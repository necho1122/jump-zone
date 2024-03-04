import { Navigate, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

function ProtectedRoute({ element, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Muestra un indicador de carga
  }

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/" />;
}

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired
};

export default ProtectedRoute;