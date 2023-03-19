import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogin } from "redux/selector";

export const PrivateRoute = ({ component }) => {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? component : <Navigate to="/" />;
};
