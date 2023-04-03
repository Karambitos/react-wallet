import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';
import NotFound from 'pages/NotFound';
import BaseStyle from 'pages/BaseStyle';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import '../main.scss';

import Layout from './Layout/Layout';
const Home = lazy(() => import('pages/Home'));
const Statistics = lazy(() => import('pages/Statistics'));

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/login" component={<Home />} />}
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
