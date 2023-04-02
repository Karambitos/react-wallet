import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

const statisticsFilterSlice = createSlice({
  name: 'statisticsFilter',
  initialState,
  reducers: {
    updateMonth(state, action) {
      state.month = action.payload;
    },
    updateYear(state, action) {
      state.year = action.payload;
    },
  },
});

export const { updateMonth, updateYear } = statisticsFilterSlice.actions;
export const statisticsFilterReducer = statisticsFilterSlice.reducer;
