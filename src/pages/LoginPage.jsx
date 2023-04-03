import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authThunks';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    dispatch(loginUser(form));
  };

  return (
    <>
      <LoginForm
        cbOnSubmit={handleSubmit}
        // btnTitle={'Registrate'}
        // linkTitle={'Login'}
        // pathName="/login"
      />
    </>
  );
};

export default LoginPage;
