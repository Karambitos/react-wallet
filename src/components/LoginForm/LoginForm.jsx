import { Button, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
// import styled from 'styled-components';
import styled from './login.module.scss';

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
    <div className={styled.wraper}>
      <h1 className={styled.text}>Finance App</h1>
      <div className={styled.layer}></div>
      <div className={styled.hero}></div>
      <div className={styled.loginContainer}>
        <div className={styled.box}>
          <img src="../../images/walletLogo.png" alt="" width={200} />{' '}
          <p>Wallet</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styled.box}>
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
          </div>

          <div className={styled.box}>
            <Button type="submit" variant="contained">
              Log in
            </Button>

            {/* <Button variant="outlined">Register</Button> */}
            <Button variant="outlined">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
// const LoginContainer = styled.div`
//   margin-bottom: 40px;
//   padding: 40px 65px 62px;

//   width: 533px;
// `;
// const FormBox = styled.form`
//   display: flex;
//   flex-direction: column;
// `;
// const BoxContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
