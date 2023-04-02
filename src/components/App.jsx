import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../main.scss';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Statistics = lazy(() => import('pages/Statistics'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const BaseStyle = lazy(() => import('pages/BaseStyle'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
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
