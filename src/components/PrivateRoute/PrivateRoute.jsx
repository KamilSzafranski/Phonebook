import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogin } from "redux/selector";

export const PrivateRoute = ({ component }) => {
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);
  return isLogin === true ? component : <Navigate to="/" />;
};
