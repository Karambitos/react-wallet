import { IconButton, Input, InputAdornment, Paper } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
// import styles from './register.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Image } from '../../assets/svg/woman_desktop.svg';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';

import { IsSafePassword } from 'components/IsSafePassword/IsSafePassword';
import { createRef } from 'react';

export const RegisterForm = ({ cbOnSubmit }) => {
  const pass = createRef();
  const comfirmPass = createRef();
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
      .max(12, 'Must be shorter than 12 characters')

      .required('Please, enter your password'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password mismatch')
      .typeError('Must be string')
      .required('Please, enter your password'),
  });
  const isLoading = useSelector(getIsLoading);
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
                  <form className="mainForm-form" onSubmit={handleSubmit}>
                    <Input
                      className="input"
                      placeholder="E-mail"
                      onChange={handleChange}
                      // type="email"
                      name="email"
                      // required
                      value={values.email}
                      startAdornment={
                        <>
                          <InputAdornment position="start">
                            <EmailIcon width={'40px'} />
                          </InputAdornment>
                        </>
                      }
                    />
                    {touched.email && errors.email && (
                      <p className={'error'}>{errors.email}</p>
                    )}

                    <Input
                      // sx={{ position: 'relative' }}
                      ref={pass}
                      className="input"
                      onChange={handleChange}
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={values.password}
                      startAdornment={
                        <>
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                          <IconButton
                            type="button"
                            sx={{
                              position: 'absolute',
                              right: '0',
                            }}
                            aria-label="search"
                            onClick={event => {
                              pass.current.lastChild.type === 'password'
                                ? (pass.current.lastChild.type = 'text')
                                : (pass.current.lastChild.type = 'password');
                            }}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </>
                      }
                    />

                    <IsSafePassword value={values.password} />
                    {touched.password && errors.password && (
                      <p className={'error'}>{errors.password}</p>
                    )}
                    <Input
                      ref={comfirmPass}
                      // sx={{ position: 'relative' }}
                      placeholder="Confirm password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      className="input"
                      onBlur={handleBlur}
                      name={'confirmPassword'}
                      startAdornment={
                        <>
                          <InputAdornment position="start">
                            <EmailIcon width={'40px'} />
                          </InputAdornment>
                          <IconButton
                            type="button"
                            sx={{
                              position: 'absolute',
                              right: '0',
                            }}
                            aria-label="search"
                            onClick={event => {
                              comfirmPass.current.lastChild.type === 'password'
                                ? (comfirmPass.current.lastChild.type = 'text')
                                : (comfirmPass.current.lastChild.type =
                                    'password');
                            }}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </>
                      }
                    />

                    {touched.confirmPassword && errors.confirmPassword && (
                      <p className={'error'}>{errors.confirmPassword}</p>
                    )}
                    <Input
                      className="input"
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
                    <button
                      type="submit"
                      disabled={!isValid && !dirty}
                      className="mainForm-button button"
                    >
                      Register
                    </button>
                    <Link
                      to="/login"
                      className=" mainForm-button button button--secondary"
                    >
                      Log in
                    </Link>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
