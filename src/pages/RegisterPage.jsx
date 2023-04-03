import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authThunks';

const RegisterPage = () => {
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
      <RegisterForm cbOnSubmit={handleSubmit} />
    </>
  );
};

export default RegisterPage;
