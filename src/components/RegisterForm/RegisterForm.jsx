import { Button, Input, InputAdornment } from '@mui/material';
import { useState } from 'react';
// import styled from 'styled-components';
import styled from './register.module.scss';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import { IsSafePassword } from 'components/IsSafePassword/IsSafePassword';

export const RegisterForm = ({ cbOnSubmit }) => {
  const validationsSchema = yup.object().shape({
    username: yup
      .string()
      .typeError('Must be string')
      .required('Please, enter your name'),
    email: yup
      .string()
      .email('Please, enter correct email')
      .typeError('Must be string')
      .required('Please, enter your email'),
    password: yup
      .string()
      .min(6, 'Must be longer than six characters')
      .matches(/[a-z]/, 'Must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Must contain at least one capital letter')
      .matches(/[0-9]/, 'Must be at least one number')
      .required('Please, enter your password'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password mismatch')
      .typeError('Must be string')
      .required('Please, enter your password'),
  });
  return (
    <div className={styled.wraper}>
      <h1 className={styled.text}>Finance App</h1>
      <div className={styled.layer}></div>
      <div className={styled.hero}></div>
      <div className={styled.registerContainer}>
        <div className={styled.box}>
          <img src="../../images/walletLogo.png" alt="" width={200} />{' '}
          <p>Wallet</p>
        </div>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validateOnBlur
          onSubmit={values => {
            cbOnSubmit(values);
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => {
            return (
              <div className={'form'}>
                <form className={styled.box} onSubmit={handleSubmit}>
                  <Input
                    placeholder="E-mail"
                    onChange={handleChange}
                    // type="email"
                    name="email"
                    // required
                    value={values.email}
                    startAdornment={
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    }
                  />{' '}
                  {touched.email && errors.email && (
                    <p className={'error'}>{errors.email}</p>
                  )}
                  <Input
                    onChange={handleChange}
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    startAdornment={
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    }
                  />{' '}
                  {touched.password && errors.password && (
                    <p className={'error'}>{errors.password}</p>
                  )}
                  <Input
                    placeholder="Confirm password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    className={'input'}
                    onBlur={handleBlur}
                    name={'confirmPassword'}
                    startAdornment={
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    }
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className={'error'}>{errors.confirmPassword}</p>
                  )}
                  <Input
                    className={'input'}
                    placeholder="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // type={'text'}
                    name={'username'}
                    value={values.username}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountBoxIcon />
                      </InputAdornment>
                    }
                  />
                  {touched.username && errors.username && (
                    <p className={'error'}>{errors.username}</p>
                  )}
                  <div className={styled.box}>
                    <Button
                      disabled={!isValid && !dirty}
                      type="submit"
                      variant="contained"
                    >
                      Register
                    </Button>
                    <Button variant="outlined">
                      <Link to="/login">Login</Link>
                    </Button>
                  </div>
                </form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
