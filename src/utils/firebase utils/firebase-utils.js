import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, getDocs, query } from "firebase/firestore";

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
// google popup signin
export const signinWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// google redirect signin
// export const signinWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// database with fireStore //
const db = getFirestore();

// -------------------------- adding a collection from object-----------------------
export const addCollectionFromObject = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey );
  const batch = writeBatch(db)

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
  })

  batch.commit();
  console.log('done')
}

// -------------------------- adding a collection from object-----------------------
export const getCollectionFromObject = async () => {
    const collectionRef = collection(db, 'categories')

    const q = query(collectionRef);
    const snapShot = await getDocs(q);

    const categoriesMap = snapShot.docs.reduce((acc, docSnapShot) => {
      const {title, items} = docSnapShot.data();
      acc[title.toLowerCase()] = items
      return acc;
    }, {})

    return(categoriesMap)
}





// ---------------------- creating the new user document in the collection of firebase ---------------------------
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  const userDocRef = doc(db, "emailUsers", userAuth.uid);

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
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error catching the user" + err.message);
    }
  }
  // if user exsist
  return userDocRef;
};


// ---------------------- sign Up using email and password ---------------------------
export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);

  // createUserDocumentFromAuth(response);

  // const userDocRef = doc(db, "emailUsers", response.user.uid);

  // const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot.exists());

  // // if not exists
  // try {
  //   if (!userSnapShot.exists()) {
  //     await setDoc(userDocRef, {
  //       displayName: displayName,
  //       email: email,
  //       password: password,
  //     });
  //   }
  // } catch (err) {
  //   console.log("error catching the user" + err.message);
  // }

  // return userDocRef;
};


// ---------------------- sign in user with email & password ---------------------------
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// ---------------------- sign out the user ---------------------------
export const signOutUser = async () => await signOut(auth);


// ---------------------- observe the authentication changing ---------------------------
export const onAuthenticationStateChangedListener = (callback) => onAuthStateChanged(auth, callback);