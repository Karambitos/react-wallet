import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactions/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReduser from './auth/authSlice';
import { currencyReducer } from './currency/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['lastActionTime', 'currencies'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
    transactions: transactionsReducer,
    currency: persistReducer(currencyPersistConfig, currencyReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
