import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from '../../api';

export const fetchAllTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        setAuthHeader(token);
        const response = await axios.get('/api/transactions');

        return response.data;
      }
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
    { month = new Date().getMonth() + 1, year = new Date().getFullYear() },
    { rejectWithValue, getState }
  ) => {
    const token = getState().auth.token;
    try {
      setAuthHeader(token);
      const response = await axios.get(
        `/api/transactions-summary?month=${month}&year=${year}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
