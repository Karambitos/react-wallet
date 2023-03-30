import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
});

export const authReducer = authSlice.reducer;
