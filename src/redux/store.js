import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactions/slice';
import auth from './auth/authSlice';

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
import { currencyReducer } from './currency/slice';
import { modalAddReducer } from './modalAddTransaction/slice';

const authPersistConfig = {
  key: 'token',
  storage,
  // whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['lastActionTime', 'currencies'],
};

const modalPersistConfig = {
  key: 'modal',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authersiterRedusec = persistReducer(authPersistConfig, auth);

export const store = configureStore({
  reducer: {
    auth: authersiterRedusec,
    transactions: transactionsReducer,

    currency: persistReducer(currencyPersistConfig, currencyReducer),
    modal: persistReducer(modalPersistConfig, modalAddReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
//roiffgserrr@gmail.com
//AAAaaa111
