import FormContainer from "../../../components/Layouts/FormContainer/FormContainer";
import Circle from "../../../components/Themes/Circle/Circle";
import Button from "../../../components/Themes/handlers/Button/Button";
import TextInput from "../../../components/Themes/handlers/TextInput/TextInput";
import signin from "./core/signin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [confirmedPasswordError, setConfirmedPasswordError] = useState();

  const formHandler = (event) => {
    event.preventDefault();
    if (confirmedPassword != password) {
      setConfirmedPasswordError("Les mots de passe ne sont pas identiques");
      return;
    }
    signin(email, password, confirmedPassword, (data) => {
      if (data.emailError) setEmailError(data.emailError);
    });
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const confirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value);
    setConfirmedPasswordError("");
  };

  return (
    <div className="main">
      <Circle>
        <FormContainer title="Inscription" onSubmit={formHandler}>
          <TextInput
            placeholder="Votre adresse email"
            type="email"
            required
            onChange={emailChange}
            error={emailError}
          />
          <TextInput
            placeholder="Mot de passe"
            type="password"
            name="mot de passe"
            autoComplete="on"
            required
            onChange={passwordChange}
          />
          <TextInput
            placeholder="Confirmé votre mot de passe"
            type="password"
            name="Confirmé le mot de passe"
            autoComplete="on"
            required
            error={confirmedPasswordError}
            onChange={confirmedPasswordChange}
          />
          <Button>M'inscrire</Button>
          <p>
            Déjà un compte ?
            <span
              className="highlight link"
              onClick={() => {
                navigate("login");
              }}
            >
              {" "}
              Se connecter
            </span>
          </p>
        </FormContainer>
      </Circle>
    </div>
  );
};

export default SignInPage;
