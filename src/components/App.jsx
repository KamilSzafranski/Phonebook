import React, { useEffect } from "react";
import { Contacts } from "./Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectisLoding } from "redux/selector";
import { fetchContacts } from "redux/phoneBook/phoneBook.thunk";
import { ErrorAlert } from "./ErrorAlert/ErrorAlert";

import { AddContactModal } from "./AddContactModal/AddContactModal";
import { ModalStatus } from "redux/constant";
import { openModalAction } from "redux/phoneBook/phoneBook.slice";
import { DeleteAlert } from "./DeleteAlert/DeleteAlert";
import { Layout } from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "pages/login/login";
import { Register } from "pages/register/register";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { persistor } from "redux/store";
import { refreshThunk } from "redux/auth/auth.thunk";

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLogin = useSelector(selectisLoding);

  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      dispatch(openModalAction(ModalStatus.ERROR_ALERT));
    }
  }, [error, dispatch]);

  return (
    <>
      <DeleteAlert />
      <ErrorAlert />
      <AddContactModal />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={<Contacts />} />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
