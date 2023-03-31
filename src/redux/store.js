import { configureStore } from '@reduxjs/toolkit';
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
// import { contactReducer } from './contacts/contactSlice';
import storage from 'redux-persist/lib/storage';
import auth from './auth/authSlice';

const authPersistConfigs = {
  key: 'token',
  storage,
};

const authersiterRedusec = persistReducer(authPersistConfigs, auth);
export const store = configureStore({
  reducer: {
    auth: authersiterRedusec,
    // contactsStore: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
