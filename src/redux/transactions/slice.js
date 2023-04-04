import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTransactions } from './operations';
import { fetchAddTransactions } from './operations';
import { fetchDeleteTransactions } from './operations';
import { fetchAllCategories } from './operations';
import { getSummaryController } from './operations';
import { fetchUpdateTransactions } from './operations';

const initialState = {
  transactions: [],
  categories: [],
  isLoading: true,
  error: null,
  categoriesSummary: {
    categories: [],
    expenseSummary: 0,
    incomeSummary: 0,
    month: null,
    year: null,
  },
};
export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    clearTransactionsState() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })

      .addCase(fetchAddTransactions.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })

      .addCase(fetchDeleteTransactions.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(
          transaction => transaction.id === action.payload
        );
        state.transactions.splice(index, 1);
      })

      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })

      .addCase(getSummaryController.fulfilled, (state, action) => {
        state.categoriesSummary = {
          categories: action.payload.categoriesSummary,
          expenseSummary: action.payload.expenseSummary,
          incomeSummary: action.payload.incomeSummary,
          month: action.payload.month,
          year: action.payload.year,
        };
      })

      .addCase(fetchUpdateTransactions.fulfilled, (state, action) => {
        const index = state.transactions.findIndex(
          transaction => transaction.id === action.payload.id
        );
        if (index >= 0) {
          state.transactions[index] = action.payload;
        }
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload ? action.payload : null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.error = null;
          state.isLoading = false;
        }
      );
  },
});

export const { clearTransactionsState } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
