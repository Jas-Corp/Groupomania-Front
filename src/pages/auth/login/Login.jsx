import FormContainer from "../../../components/Layouts/FormContainer/FormContainer";
import Circle from "../../../components/Themes/Circle/Circle";
import Button from "../../../components/Themes/handlers/Button/Button";
import TextInput from "../../../components/Themes/handlers/TextInput/TextInput";
import login from "./core/login";
import AuthContext from "../../../contexts/auth-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState();

  const formHandler = (event) => {
    event.preventDefault();
    if (emailError) return;
    login(email, password, (data) => {
      if (data.success) {
        authCtx.setIsLogged(true);
        authCtx.setToken(data.token);
        navigate("/home");
      }
      if (data.error) {
        setEmailError(data.error);
      }
    });
  };

  const onInputsChange = () => {
    setEmailError();
  };
  return (
    <div className="main">
      <Circle>
        <FormContainer title="Connexion" onSubmit={formHandler}>
          <TextInput
            placeholder="Votre adresse email"
            type="email"
            required
            error={emailError}
            onChange={(e) => {
              setEmail(e.target.value);
              onInputsChange();
            }}
          />
          <TextInput
            placeholder="Mot de passe"
            type="password"
            name="mot de passe"
            autoComplete="on"
            required
            onChange={(e) => {
              setPassword(e.target.value);
              onInputsChange();
            }}
          />

          <Button>Me connecter</Button>
          <p>
            Pas encore de compte ?
            <span
              className="highlight link"
              onClick={() => {
                navigate("./signin");
              }}
            >
              S'inscrire
            </span>
          </p>
        </FormContainer>
      </Circle>
    </div>
  );
};

export default Login;
