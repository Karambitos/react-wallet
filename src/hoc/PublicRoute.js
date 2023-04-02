// //  high order Component (HOC)
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { useSelector } from 'react-redux';

// export const PublicRoute = ({ children }) => {
//   const location = useLocation();
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   if (isLoggedIn) {
//     return <Navigate to="/" state={{ from: location }} />;
//   }
//   return children;
// };

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/auth/authSelectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
