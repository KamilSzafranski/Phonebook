import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook/phoneBook.slice";
import { filterReducer } from "./filters/filters.slice";
import { authReducer } from "./auth/auth.slice";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
