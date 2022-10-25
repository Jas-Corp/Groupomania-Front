import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  isLogged: false,
  token: "",
  name: "",
  id: "",
  setIsLogged: () => {},
  setToken: () => {},
  setId: () => {},
  setName: () => {},
});
export default AuthContext;

export const AuthProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        token,
        setToken,
        name,
        setName,
        id,
        setId,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
