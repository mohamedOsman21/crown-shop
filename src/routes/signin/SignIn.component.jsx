import { useEffect } from "react";
import SignupForm from "../../Components/signupForm/SignupForm.component";
import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase utils/firebase-utils";
import { useDispatch } from "react-redux";
import { googleSignInStart } from "../../store/user/user.action";

function SignIn() {
  const dispatch = useDispatch();
  
  const logGoogleUser = async () => {
    // const { user } = await signinWithGooglePopup();
    // await createUserDocumentFromAuth(user);

    dispatch(googleSignInStart());
  };

  return (
    <>
      <h1>this is from sign in</h1>
      <button >signIn with google</button>
      <SignupForm />
    </>
  );
}

export default SignIn;
