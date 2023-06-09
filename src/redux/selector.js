import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.phoneBook.contacts;
export const selectFilters = state => state.filter;
export const selectisLoding = state => state.phoneBook.isLoading;
export const selectModal = state => state.phoneBook.modal;
export const selectIdToDelete = state => state.phoneBook.idToDelete;
export const selectIsLogin = state => state.auth.isLogin;
export const selectAuthPending = state => state.auth.isPending;
export const selectError = state => state.phoneBook.error || state.auth.error;
export const selectUser = state => state.auth.user;
export const selectIsRefresh = state => state.auth.isRefresh;
export const selectIsEditable = state => state.phoneBook.isEditable;

export const selectFileredContacts = createSelector(
  [selectContacts, selectFilters],
  (phoneBook, filters) =>
    phoneBook.filter(element =>
      element.name.toLowerCase().startsWith(filters.toLowerCase())
    )
);
