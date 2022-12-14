import { useContext } from "react";
import AuthContext from "../contexts/auth-context";
import getUsernameFromEmail from "../core/utils/getUsernameFromEmail";

const useAuth = () => {
  const authCtx = useContext(AuthContext);

  const setLogedUser = (data: { token: string; id: string; email: string }) => {
    authCtx.setIsLogged(true);
    authCtx.setToken(data.token);
    authCtx.setId(data.id);
    authCtx.setName(getUsernameFromEmail(data.email));
    authCtx.setEmail(data.email);
  };

  return { setLogedUser };
};

export default useAuth;
