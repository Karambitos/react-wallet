import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';
import { useMediaQuery } from 'react-responsive';

export const MobileRoute = ({ component: Component, redirectTo = '/' }) => {
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isLoggedIn = useSelector(getIsAuth);
  const shouldRedirect = !isLoggedIn;
  if (isTabletOrDesktop) {
    return <Navigate to="/" />;
  }
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
