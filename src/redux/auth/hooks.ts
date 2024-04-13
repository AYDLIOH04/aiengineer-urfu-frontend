import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";
import { RootState } from "..";

export const useAuth = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  return isAuth;
};

export const useLogin = () => {
  const dispatch = useDispatch();
  return () => dispatch(login());
};

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => dispatch(logout());
};
