import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from '../../api';
// dsajkhkjdskjdsdskkdfhkhds@mail.com

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/sign-up', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/sign-in', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const newTransaction = createAsyncThunk(
  'auth/newTransaction',
  async (credentials, { thunkAPI, getState }) => {
    const token = getState().auth.token;
    try {
      console.log(credentials);
      const response = await axios.post('/api/transactions', credentials);
      setAuthHeader(token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCategories = createAsyncThunk(
  'auth/getCategories',
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.get('/api/transaction-categories');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, { thunkAPI, getState }) => {
//     const persistedToken = getState().auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
