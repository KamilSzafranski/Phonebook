import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "phoneBook/getContacts",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "phoneBook/deleteContacts",
  async (ids, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${ids}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "phoneBook/addContacts",
  async ({ text: name, num: number }, thunkAPI) => {
    try {
      const contactToAdd = {
        name,
        number,
      };
      const response = await axios.post("/contacts", contactToAdd);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchContact = createAsyncThunk(
  "phoneBook/patchContacts",
  async ({ name, number, id }, thunkAPI) => {
    try {
      const contact = {
        name,
        number,
      };
      const response = await axios.patch(`/contacts/${id}`, contact);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
