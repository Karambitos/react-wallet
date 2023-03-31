import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { LogoutBtn } from './logoutBtn/logoutBtn';

export const App = () => {
  return (
    <>
      <LogoutBtn />
      <RegisterPage />
      <LoginPage />
    </>
  );
};
