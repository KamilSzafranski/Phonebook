import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./auth.thunk";

const authInitialState = {
  token: null,
  isLogin: null,
  user: {},
  isRefreshing: null,
  error: null,
  isPending: false,
};

const isPendingAction = action =>
  action.type.endsWith("pending") && action.type.startsWith("auth");
const isRejectedAction = action =>
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
      .addMatcher(isPendingAction, (state, action) => {
        state.isPending = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isPending = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
