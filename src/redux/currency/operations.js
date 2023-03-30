import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const currencyRate = createAsyncThunk(
  'currency/getRate',
  async (_, thunkAPI) => {
    const usdCurrencyCode = 840;
    const eurCurrencyCode = 978;
    const uahCurrencyCode = 980;
    try {
      const res = await axios.get('https://api.monobank.ua/bank/currency');
      const usdToUah = res.data.find(
        rate =>
          rate.currencyCodeA === usdCurrencyCode &&
          rate.currencyCodeB === uahCurrencyCode
      );
      const eurToUah = res.data.find(
        rate =>
          rate.currencyCodeA === eurCurrencyCode &&
          rate.currencyCodeB === uahCurrencyCode
      );
      const data = {
        usd: {
          rateSell: usdToUah.rateSell,
          rateBuy: usdToUah.rateBuy,
        },
        eur: {
          rateSell: eurToUah.rateSell,
          rateBuy: eurToUah.rateBuy,
        },
      };
      return data;
    } catch (error) {
      console.log(error);
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
