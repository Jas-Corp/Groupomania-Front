import { useState } from "react";
import React from "react";

const AuthContext = React.createContext({
  isLogged: false,
  setIsLogged: () => {},
});
export default AuthContext;

export const AuthProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
