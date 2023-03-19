import { createSlice } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContacts,
  fetchContacts,
  patchContact,
} from "./phoneBook.thunk";

const phoneBookInitialState = {
  isLoading: false,
  error: null,
  contacts: [],
  modal: null,
  idToDelete: null,
  isEditable: false,
};

const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = null;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingPhoneBookAction = action =>
  action.type.endsWith("pending") && action.type.startsWith("phoneBook");
const isRejectedPhoneBookAction = action =>
  action.type.endsWith("rejected") && action.type.startsWith("phoneBook");

const phoneBookSlice = createSlice({
  name: "phoneBook",
  initialState: phoneBookInitialState,
  reducers: {
    setEditableAction: (state, action) => {
      state.isEditable = action.payload;
    },
    closeModalAction: (state, action) => {
      state.modal = null;
    },
    openModalAction: (state, action) => {
      state.modal = action.payload;
    },
    setIdToDeleteAction: (state, action) => {
      state.idToDelete = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(patchContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const searchIndex = state.contacts.findIndex(
          element => element.id === action.payload.id
        );

        state.contacts.splice(searchIndex, 1, action.payload);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.modal = null;
        const itemToDelete = state.contacts.findIndex(
          element => element.id === action.payload.id
        );
        state.contacts.splice(itemToDelete, 1);
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.modal = null;
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addMatcher(isPendingPhoneBookAction, handlePending)
      .addMatcher(isRejectedPhoneBookAction, handleError);
  },
});

export const {
  closeModalAction,
  openModalAction,
  setIdToDeleteAction,
  setEditableAction,
} = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
