import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from './authThunks';
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: {
    [registerUser.pending]: handlePending,
    [loginUser.pending]: handlePending,
    [getCurrentUser.pending]: handlePending,
    [logoutUser.pending]: handlePending,

    [registerUser.rejected]: handleRejected,
    [loginUser.rejected]: handleRejected,
    [getCurrentUser.rejected]: handleRejected,
    [logoutUser.rejected]: handleRejected,

    [registerUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: null,
      };
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        user: payload,
        isLoading: false,
        error: null,
      };
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      return {
        user: null,
        isLoading: false,
        error: null,
        isRefreshing: false,
        token: null,
      };
    },
  },
});
export default authSlice.reducer;
