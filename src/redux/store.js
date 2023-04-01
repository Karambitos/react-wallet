import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

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
    currency: persistReducer(currencyPersistConfig, currencyReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
//roiffgserrr@gmail.com
//AAAaaa111
