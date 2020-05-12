import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIVF_CX_UNLvaVVDNSGbvJfqZN240DlVE",
  authDomain: "kiwi-db.firebaseapp.com",
  databaseURL: "https://kiwi-db.firebaseio.com",
  projectId: "kiwi-db",
  storageBucket: "kiwi-db.appspot.com",
  messagingSenderId: "569836080419",
  appId: "1:569836080419:web:e368d96b4172d0be781096",
  measurementId: "G-03D1P4VHYZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user.");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
