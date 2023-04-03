import { Routes, Route, Navigate } from 'react-router-dom';
import '../main.scss';
import Dashboard from '../pages/Dashboard';
import Statistics from 'pages/Statistics';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';
import BaseStyle from 'pages/BaseStyle';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/authSelectors';
import Home from 'pages/Home';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? children : <Navigate to="/login" />;
};
const PublicRoute = ({ children }) => {
  const isAuth = useSelector(getIsAuth);

  return !isAuth ? children : <Navigate to="/contacts" />;
};

export default function App() {

  const isAuth = useSelector(getIsAuth);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <PrivateRoute>
        <Routes>
          <PrivateRoute></PrivateRoute>
        </Routes>
      </PrivateRoute>
      {isAuth ? (
        <>
          <Route element={<Layout />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </>
      )}
      <Route path="/BaseStyle" element={<BaseStyle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
