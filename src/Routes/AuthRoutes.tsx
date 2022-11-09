import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/auth-context";

const AuthRoutes = () => {
  const authCtx = useContext(AuthContext);
  const isLogged = authCtx.isLogged;

  return (
    <>
      {isLogged && <Outlet />}
      {!isLogged && <Navigate to="/auth" replace />}
    </>
  );
};

export default AuthRoutes;
