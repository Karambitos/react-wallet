// //  high order Component (HOC)
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { selectIsLoggedIn } from '/redux/auth/selectors';
// import { useSelector } from 'react-redux';

// export const PrivateRoute = ({ children }) => {
//   const location = useLocation();
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   if (!isLoggedIn) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }
//   return children;
// };

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsAuth);

  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
