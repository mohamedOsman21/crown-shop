import { useEffect } from "react";
import SignupForm from "../../Components/signupForm/SignupForm.component";
import {
  signinWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase utils/firebase-utils";
import SignInForm from "../../Components/signin form/signin-form.component";
import "./userAuthentication.styles.scss";

function UserAuthentication() {
  // const logGoogleUser = async () => {
  //   const { user } = await signinWithGooglePopup();
  //   await createUserDocumentFromAuth(user);
  // };

  return (
//    <div className="auth-container">
        <div className="welcome-header">Welcome</div>
   //   <div className="forms">
     //   <SignInForm />
       // <SignupForm />
        {/* <button onClick={logGoogleUser}>signIn with google</button> */}
      //</div>
// </div>
  );
}

export default UserAuthentication;
