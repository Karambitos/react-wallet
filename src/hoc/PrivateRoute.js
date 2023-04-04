import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';
import { useMediaQuery } from 'react-responsive';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsAuth);

  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
