import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authThunks';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ username, email, password }) => {
    const userData = {
      username,
      email,
      password,
    };

    dispatch(registerUser(userData));
  };
  return (
    <>
      <div>
        <p>Regiter</p>
        <RegisterForm
          cbOnSubmit={handleSubmit}
          btnTitle={'Registrate'}
          linkTitle={'Login'}
          pathName="/login"
        />
      </div>
    </>
  );
};
