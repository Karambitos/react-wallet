import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAuthHeader } from '../../api';
import { balanceUpdate } from 'redux/auth/authSlice';

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
  async (credentials, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.post('/api/transactions', credentials);
      dispatch(balanceUpdate(response.data.balanceAfter));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteTransactions = createAsyncThunk(
  'transactions/fetchDelete',
  async (transactionId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/transactions/${transactionId}`);
      if (response.status === 204) {
        toast.success('Transaction deleted successfully!', {
          className: 'custom-toast',
        });
        return transactionId;
      } else {
        return;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const isLoading = getState().isLoading;
      if (isLoading) {
        return false;
      }
    },
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

export const fetchUpdateTransactions = createAsyncThunk(
  'transactions/fetchUpdate',
  async ({ transactionId, credentials }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/transactions/${transactionId}`,
        credentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
