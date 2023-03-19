import React, { lazy, Suspense, useEffect } from "react";
import { Contacts } from "./Contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLogin } from "redux/selector";
import { ModalStatus } from "redux/constant";
import { openModalAction } from "redux/phoneBook/phoneBook.slice";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { refreshThunk } from "redux/auth/auth.thunk";
import { selectIsRefresh } from "redux/selector";
import { fetchContacts } from "redux/phoneBook/phoneBook.thunk";
import { Layout } from "./Layout/Layout";

import { Fallback } from "./Fallback/Fallback";

const Home = lazy(() => import("./Home/Home"));
const ContactDetail = lazy(() => import("./ContactDetail/ContactDetail"));
const Login = lazy(() => import("../pages/login/login"));
const Register = lazy(() => import("../pages/register/register"));
const AddContactModal = lazy(() => import("./AddContactModal/AddContactModal"));
const DeleteAlert = lazy(() => import("./DeleteAlert/DeleteAlert"));
const ErrorAlert = lazy(() => import("./ErrorAlert/ErrorAlert"));

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isRefresh = useSelector(selectIsRefresh);
  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      dispatch(openModalAction(ModalStatus.ERROR_ALERT));
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (!isRefresh && isLogin) dispatch(fetchContacts());
  }, [dispatch, isLogin, isRefresh]);

  return (
    <>
      <Suspense fallback={<Fallback />}>
        <DeleteAlert />
        <ErrorAlert />
        <AddContactModal />
      </Suspense>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={<Contacts />} />}
          />
          <Route path="contacts/:id" element={<ContactDetail />} />
        </Route>

        <Route
          path="/login"
          element={
            <Suspense fallback={<Fallback />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Fallback />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
