import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook/phoneBook.slice";
import { filterReducer } from "./filters/filters.slice";
import { authReducer } from "./auth/auth.slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistAuthConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token", "user"],
};

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    filter: filterReducer,
    auth: persistReducer(persistAuthConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store, [{ manualPersist: true }]);
