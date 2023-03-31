import { Routes, Route } from 'react-router-dom';
import '../main.scss';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Statistics from 'pages/Statistics';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';
import BaseStyle from 'pages/BaseStyle';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/BaseStyle" element={<BaseStyle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
