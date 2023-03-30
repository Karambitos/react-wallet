import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTransactions } from './operations';

const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
};
export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [fetchAllTransactions.pending](state, _) {
      state.isLoading = true;
    },

    [fetchAllTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.transactions = action.payload;
    },

    [fetchAllTransactions.rejected](state, action) {
      state.isLoading = false;
      state.transactions = action.payload;
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
