import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { state } = useUserContext();

  if (!state.isAuthenticated) {
    return <Navigate to="/authentication" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
