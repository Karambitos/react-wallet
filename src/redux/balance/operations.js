import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserBalance = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/current`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
