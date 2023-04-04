import { createSlice } from '@reduxjs/toolkit';
import { getUserBalance } from './operations';

const initialState = {
  balance: 0,
};

const balanceSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    clearBalance() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserBalance.fulfilled, (state, action) => {
      state.balance = action.payload.balance;
    });
  },
});

export const { clearBalance } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
