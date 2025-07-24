import { useState } from "react";
import Button from "../buttons/Button.component";
import FormInput from "../formInput/FormInput.component";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase utils/firebase-utils";
import "./signin-form.styles.scss";
import googleSvg from '../../assets/web_light_rd_na.svg'

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("this user is not exists!!", err.message);
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="signin-form-container">
      <h2>already have an account</h2>
      <span>sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email: "
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="password: "
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={logGoogleUser} type="submit">
            signIn with google <img src={googleSvg} alt="google" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
