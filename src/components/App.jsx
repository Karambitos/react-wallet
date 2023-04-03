import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../main.scss';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Statistics from 'pages/Statistics';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';
import BaseStyle from 'pages/BaseStyle';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';

export default function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<PrivateRoute redirectTo="/login" component={<Home />} />}
          />
          <Route
            path="/Dashboard"
            element={
              <PrivateRoute redirectTo="/login" component={<Dashboard />} />
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute redirectTo="/login" component={<Statistics />} />
            }
          />
        </Route>
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<PublicRoute redirectTo="/" component={<RegisterPage />} />}
        />
        <Route path="/BaseStyle" element={<BaseStyle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
