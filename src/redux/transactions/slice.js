import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTransactions } from './operations';
import { fetchAddTransactions } from './operations';
import { fetchAllCategories } from './operations';
import { getSummaryController } from './operations';

const initialState = {
  transactions: [],
  categories: [],
  isLoading: false,
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
  extraReducers: builder => {
    builder
      // .addCase(fetchAllTransactions.pending, (state, _) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      // .addCase(fetchAllTransactions.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.transactions = action.payload;
      // })
      // .addCase(fetchAddTransactions.pending, (state, _) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchAddTransactions.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      })
      // .addCase(fetchAddTransactions.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      // .addCase(fetchAllCategories.rejected, (state, action) => {
      //   state.error = action.payload;
      // })

      .addCase(getSummaryController.fulfilled, (state, action) => {
        state.categoriesSummary = {
          categories: action.payload.categoriesSummary,
          expenseSummary: action.payload.expenseSummary,
          incomeSummary: action.payload.incomeSummary,
          month: action.payload.month,
          year: action.payload.year,
        };
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

export const transactionsReducer = transactionsSlice.reducer;
