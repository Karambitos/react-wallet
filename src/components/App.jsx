import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { PublicRoute } from 'hoc/PublicRoute';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

import '../main.scss';
import CurrencyMob from 'pages/Currencymob';
const Home = lazy(() => import('pages/Home'));
const Statistics = lazy(() => import('pages/Statistics'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const BaseStyle = lazy(() => import('pages/BaseStyle'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute redirectTo="/login" component={<Home />} />
              }
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute redirectTo="/login" component={<Statistics />} />
              }
            />
            <Route
              path="/currency"
              element={
                <PrivateRoute redirectTo="/login" component={<CurrencyMob />} />
              }
            />
          </Route>
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route path="/BaseStyle" element={<BaseStyle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
