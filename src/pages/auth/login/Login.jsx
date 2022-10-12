import FormContainer from "../../../components/Layouts/FormContainer/FormContainer";
import Circle from "../../../components/Themes/Circle/Circle";
import Button from "../../../components/Themes/handlers/Button/Button";
import TextInput from "../../../components/Themes/handlers/TextInput/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();

  const formHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="main">
      <Circle>
        <FormContainer title="Connexion" onSubmit={formHandler}>
          <TextInput
            placeholder="Votre adresse email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            placeholder="Mot de passe"
            type="password"
            name="mot de passe"
            autoComplete="on"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button>Me connecter</Button>
          <p>
            Pas encore de compte ?
            <span
              className="highlight link"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              S'inscrire
            </span>
          </p>
        </FormContainer>
      </Circle>
    </div>
  );
};

export default Login;
