import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOOYDzz3vmEKTM4zxGXaIuYFecHta6_kY",
  authDomain: "crown-clothing-627a5.firebaseapp.com",
  projectId: "crown-clothing-627a5",
  storageBucket: "crown-clothing-627a5.firebasestorage.app",
  messagingSenderId: "782184206267",
  appId: "1:782184206267:web:60c8aa69ca47e7cac53e9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// sign in with google
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signinWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// database with fireStore //
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // if user does not exsist (set the user)
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error catching the user"+ err.message);
    }

  }
  // if user exsist
  return userDocRef;
};
