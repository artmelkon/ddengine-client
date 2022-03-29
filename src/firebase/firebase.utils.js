import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { useMutation } from '@apollo/client';

const config = {
  apiKey: "AIzaSyAZP50yEAuUqZZQdKkbI4lO8ALd1EA4duU",
  authDomain: "test-dd-engine.firebaseapp.com",
  projectId: "test-dd-engine",
  storageBucket: "test-dd-engine.appspot.com",
  messagingSenderId: "875299228522",
  appId: "1:875299228522:web:0a75e28dfdc0a48cb77313",
  measurementId: "G-ENR8QCZTKD",
};


export const createGoogleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth)
  // const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const snapShot = await userRef.get();

  // if (snapShot.exists) {
  //   const { displayName, email } = userAuth;
  //   const createdAt = new Date();
  //   try {
  //     await userRef.set({ displayName, email, createdAt, ...additionalData });
  //   } catch (err) {
  //     throw new Error("Error creating user ", err.message);
  //   }
  // }
  // console.log(userRef)
  // return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
