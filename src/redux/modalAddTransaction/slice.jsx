import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalAddTransactionOpen: false,
  },
  reducers: {
    setModalAddTransactionOpen: (state, action) => {
      state.isModalAddTransactionOpen = action.payload;
    },
  },
});

export const { setModalAddTransactionOpen } = modalSlice.actions;

export const modalAddReducer = modalSlice.reducer;
