import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase utils/firebase-utils";
import FormInput from "../formInput/FormInput.component";
import './signupForm.styles.scss';
import Button from "../buttons/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


function SignupForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //user context

//----------------------------- input fields change handling -----------------------------
  function handleChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

//----------------------------- clean input fields after signUp -----------------------------
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

//----------------------------- sign Up user handling -----------------------------
  async function handleSubmit(event) {
    if (password != confirmPassword) {
      alert("password didn't match!!, try again");
    } else {
      event.preventDefault();
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
        displayName
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    }
  }

  return (
    <div className="signup-container">
      <h2>Didn't have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="display name: "
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

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

        <FormInput
          label="confirm password: "
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type="submit" >submit button</Button>
      </form>
    </div>
  );
}

export default SignupForm;
