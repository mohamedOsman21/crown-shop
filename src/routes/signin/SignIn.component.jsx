import { useEffect } from "react";
import SignupForm from "../../Components/signupForm/SignupForm.component";
import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase utils/firebase-utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>this is from sign in</h1>
      <button onClick={logGoogleUser}>signIn with google</button>
      <SignupForm />
    </>
  );
}

export default SignIn;
