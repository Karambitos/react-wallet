import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from '../../api';
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
