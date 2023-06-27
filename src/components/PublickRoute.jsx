import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function PublickRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
