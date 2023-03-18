import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./auth.thunk";

const authInitialState = {
  token: null,
  isLogin: null,
  user: {},
  error: null,
  isRefresh: true,
  isPending: false,
};

const isPendingAuthAction = action =>
  action.type.endsWith("pending") && action.type.startsWith("auth");
const isRejectedAuthAction = action =>
  action.type.endsWith("rejected") && action.type.startsWith("auth");

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.user = null;
        state.token = null;
        state.isLogin = null;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.user = action.payload;
        state.isLogin = true;
        state.isRefresh = false;
      })

      .addMatcher(isPendingAuthAction, (state, action) => {
        state.isPending = true;
      })
      .addMatcher(isRejectedAuthAction, (state, action) => {
        if (action.payload !== "No remember") state.error = action.payload;

        state.isPending = false;
        state.isRefresh = false;
      });
  },
});

export const authReducer = authSlice.reducer;
