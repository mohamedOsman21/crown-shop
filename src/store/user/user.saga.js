import { all, call, takeLatest, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./userActionTypes";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentuser,
  signInAuthUserWithEmailAndPassword,
  signinWithGooglePopup,
} from "../../utils/firebase utils/firebase-utils";
import { signInFailed, signInSuccess } from "./user.action";
import { getDoc } from "firebase/firestore";
import { signOutUserFull } from "./../../utils/firebase utils/firebase-utils";

// -------------------- getting the user's snapShot ----------------------------
export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userDocRef = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    const userSnapShot = yield call(getDoc, userDocRef);

    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (err) {
    yield put(signInFailed(err));
  }
}
// -------------------- check if any user is signed in ----------------------------
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentuser);
    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (err) {
    yield put(signInFailed(err));
  }
}

// -------------------- google sign in ----------------------------
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signinWithGooglePopup);
    yield call(getSnapShotFromUserAuth, user);
    // put(signInSuccess())
  } catch (err) {
    put(signInFailed(err));
  }
}

// -------------------- email signIn ----------------------------
export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapShotFromUserAuth, user);
  } catch (err) {
    put(signInFailed(err));
  }
}
// -------------------- email sign Up ----------------------------
export function* signUpWtihEmail({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
      displayName
    );
    yield call(getSnapShotFromUserAuth, user, displayName);
  } catch (err) {
    put(signInFailed(err));
  }
}

export function* signTheUserOut() {
  yield call(signOutUserFull);
}

export function* onSignUpWithEmail() {
  yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS, signUpWtihEmail);
}

export function* onEmailAndPasswordSignIn() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGNIN_START,
    signInWithEmailAndPassword
  );
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signOutUser() {
  yield takeLatest(USER_ACTION_TYPES.SIGNOUT_USER, signTheUserOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailAndPasswordSignIn),
    call(onSignUpWithEmail),
    call(signOutUser),
  ]);
}
