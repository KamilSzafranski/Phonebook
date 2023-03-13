import React, { useEffect } from "react";
import { Contacts } from "./Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "redux/selector";
import { fetchContacts } from "redux/phoneBook/phoneBook.thunk";
import { ErrorAlert } from "./ErrorAlert/ErrorAlert";

import { AddContactModal } from "./AddContactModal/AddContactModal";
import { ModalStatus } from "redux/constant";
import { openModalAction } from "redux/phoneBook/phoneBook.slice";
import { DeleteAlert } from "./DeleteAlert/DeleteAlert";
import { Layout } from "./Layout/Layout";

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      dispatch(openModalAction(ModalStatus.ERROR_ALERT));
    }
  }, [error, dispatch]);

  return (
    <>
      <Layout />
      <Contacts />
      <DeleteAlert />
      <ErrorAlert />
      <AddContactModal />
    </>
  );
};
