import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTransactions } from './operations';
import { fetchAddTransactions } from './operations';
import { fetchAllCategories } from './operations';

const initialState = {
  transactions: [],
  categories: [],
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

    [fetchAddTransactions.pending](state, _) {
      state.isLoading = true;
    },
    [fetchAddTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.transactions.push(action.payload);
      state.error = null;
    },

    [fetchAddTransactions.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchAllCategories.fulfilled](state, action) {
      state.categories = action.payload;

      state.error = null;
    },

    [fetchAllCategories.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export const transactionsReducer = transactionsSlice.reducer;
