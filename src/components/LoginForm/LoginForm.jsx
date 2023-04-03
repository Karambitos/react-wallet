import { Input, InputAdornment } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Image } from '../../assets/svg/men_desktop.svg';
import { useState } from 'react';
import styles from './login.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';

export const LoginForm = ({ cbOnSubmit }) => {
  const [formLogin, setFormLogin] = useState({ email: '', password: '' });
  const isLoading = useSelector(getIsLoading);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormLogin(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    cbOnSubmit(formLogin);
  };
  const isTablet = useMediaQuery({
    query: '(min-width: 580px)',
  });

  return (
    <div className="mainContainer">
      <div className="mainForm">
        {isLoading && <Loader />}
        {isTablet && (
          <div className="mainForm-wrapperImage">
            <div className="mainForm-image">
              <Image />
            </div>
            <h1 className="mainForm-title">Finance App</h1>
          </div>
        )}
        <div className="mainForm-wrapperForm">
          <div className="mainForm-wrapperFormInner">
            <Logo className="mainForm-logo" />
            <form className="mainForm-form" onSubmit={handleSubmit}>
              <Input
                placeholder="E-mail"
                id="input-with-icon-adornment"
                type="email"
                name="email"
                value={formLogin.name}
                required
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                }
              />
              <Input
                placeholder="Password"
                id="input-with-icon-adornment"
                type="text"
                name="password"
                value={formLogin.name}
                required
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
              />
              <button type="submit" className="mainForm-button button">
                Log in
              </button>
              <Link
                to="/register"
                className=" mainForm-button button button--secondary"
              >
                Register
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
