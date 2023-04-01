import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from '../../api';

axios.defaults.baseURL = `https://wallet.goit.ua/docs/`;

export const fetchAllTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/transactions');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddTransactions = createAsyncThunk(
  'transactions/fetchAdd',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const response = await axios.post('/api/transactions', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllCategories = createAsyncThunk(
  'categories/get',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/transaction-categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// dsajkhkjdskjdsdskkdfhkhds@mail.com

export const getSummaryController = createAsyncThunk(
  'auth/getSummaryController',
  async (
    { month = new Date().getMonth(), year = new Date().getFullYear() },
    { rejectWithValue, getState }
  ) => {
    const token = getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.get(
        // `/api/transactions-summary?month=${month}&year=${year}`
        `/api/transactions-summary`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
