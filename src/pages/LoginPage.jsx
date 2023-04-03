import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authThunks';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(loginUser(form));
  };

  return (
    <>
      <LoginForm cbOnSubmit={handleSubmit} />
    </>
  );
};

export default LoginPage;
