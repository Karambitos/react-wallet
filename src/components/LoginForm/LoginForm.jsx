import { Button, Input, InputAdornment } from '@mui/material';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Image } from '../../assets/svg/men_desktop.svg';
import { useState } from 'react';
// import styles from 'styles-components';
import styles from './login.module.scss';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link, Navigate, Route } from 'react-router-dom';

export const LoginForm = ({ cbOnSubmit }) => {
  const [formLogin, setFormLogin] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormLogin(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    cbOnSubmit(formLogin);
  };
  console.log();
  return (
    <div className="mainContainer">
      <div className={styles.formWrapper}>
        <div className={styles.imageWrapper}>
          <div className={styles.image}>
            <Image />
          </div>
          <h1 className={styles.text}>Finance App</h1>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formContainerInner}>
            <Logo className={styles.logo} />
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className={`${styles.button} button`}>
                Log in
              </button>
              <Link
                to="/register"
                className={`${styles.button} button button--secondary`}
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
