import FormContainer from "../../components/Layouts/FormContainer/FormContainer";
import Circle from "../../components/Themes/Circle/Circle";
import Button from "../../components/Themes/handlers/Button/Button";
import TextInput from "../../components/Themes/handlers/TextInput/TextInput";
import signin from "./core/signin";
import { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();

  const formHandler = (event) => {
    event.preventDefault();
    signin(email, password, confirmedPassword);
  };
  return (
    <div className={"main"}>

      <Circle>
        <FormContainer title="Inscription" onSubmit={formHandler}>
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
          <TextInput
            placeholder="Confirmé votre mot de passe"
            type="password"
            name="Confirmé le mot de passe"
            autoComplete="on"
            required
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
          <Button>M'inscrire</Button>
          <p>
            Déjà un compte ?
            <a href="#test" className="highlight">
              Se connecter
            </a>
          </p>
        </FormContainer>
      </Circle>
    </div>
  );
};

export default SignInPage;
