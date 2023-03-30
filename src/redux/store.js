import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { authReducer } from './auth/slice';
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

const authPersistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token'],
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
    auth: persistReducer(authPersistConfig, authReducer),
    currency: persistReducer(currencyPersistConfig, currencyReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
