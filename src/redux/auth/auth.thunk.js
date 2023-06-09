import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setHeaderToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (userToRegiser, thunkAPI) => {
    try {
      const respone = await axios.post("/users/signup", userToRegiser);
      setHeaderToken(respone.data.token);

      return respone.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", user);

      setHeaderToken(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout");
      axios.defaults.headers.common.Authorization = "";
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshThunk = createAsyncThunk(
  "auth/refres",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;

      if (!token) return thunkAPI.rejectWithValue("No remember");
      setHeaderToken(token);
      const respone = await axios.get("/users/current");
      return respone.data;
    } catch (error) {}
  }
);
