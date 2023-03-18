import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "phoneBook/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response.data);
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
      const options = {
        method: "DELETE",
      };
      const response = await axios.delete(`/contacts/${ids}`);
      console.log(response.data);
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
