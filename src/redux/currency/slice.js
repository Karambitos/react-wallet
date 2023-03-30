import { createSlice } from '@reduxjs/toolkit';
import { currencyRate } from './operations';

const initialState = {
  lastActionTime: null,
  currencies: {
    usd: {
      rateSell: 0,
      rateBuy: 0,
    },
    eur: {
      rateSell: 0,
      rateBuy: 0,
    },
  },
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    updateLastActionTime(state, action) {
      state.lastActionTime = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(currencyRate.fulfilled, (state, action) => {
      state.currencies = action.payload;
    });
  },
});

export const { updateLastActionTime } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
