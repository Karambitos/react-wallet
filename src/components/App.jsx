import { Routes, Route } from 'react-router-dom';
import '../main.scss';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Statistics from '../pages/Statistics';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
