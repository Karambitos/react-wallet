import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authThunks';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = form => {
    console.log(form);
    dispatch(loginUser(form));
  };
  return (
    <>
      <div>
        <p>Login</p>
        <LoginForm
          cbOnSubmit={handleSubmit}
          btnTitle={'Registrate'}
          linkTitle={'Login'}
          pathName="/login"
        />
      </div>
    </>
  );
};