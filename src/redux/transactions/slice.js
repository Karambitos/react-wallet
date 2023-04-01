import { createSlice } from '@reduxjs/toolkit';
import { getSummaryController } from './operations';

export const transactions = createSlice({
  name: 'transactions',
  initialState: {
    transactions: {
      categoriesSummary: [],
      expenseSummary: 0,
      incomeSummary: 0,
      month: null,
      year: null,
    },
  },
  extraReducers: builder => {
    builder
      // .addCase(register.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      // })
      // .addCase(logIn.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      // })

      // .addCase(getCategories.fulfilled, (state, action) => {
      //   state.categories = action.payload;
      // })
      // .addCase(getTransactions.fulfilled, (state, action) => {
      //   state.transactions = action.payload;
      // })

      .addCase(getSummaryController.fulfilled, (state, action) => {
        state.transactions = {
          categoriesSummary: action.payload.categoriesSummary,
          expenseSummary: action.payload.expenseSummary,
          incomeSummary: action.payload.incomeSummary,
          month: action.payload.month,
          year: action.payload.year,
        };
      });

    // .addMatcher(
    //   action => action.type.endsWith('/pending'),
    //   (state, action) => {
    //     state.error = null;
    //   }
    // )
    // .addMatcher(
    //   action => action.type.endsWith('/rejected'),
    //   (state, action) => {
    //     state.error = action.payload ? action.payload : null;
    //   }
    // )
    // .addMatcher(
    //   action => action.type.endsWith('/fulfilled'),
    //   (state, action) => {
    //     state.error = null;
    //   }
    // );
  },
});

export default transactions.reducer;
