import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUACsVNkVFUmdVWu6WVTrNRbbK1HvjEvg",
  authDomain: "whats-app-clone-5cab4.firebaseapp.com",
  databaseURL: "https://whats-app-clone-5cab4.firebaseio.com",
  projectId: "whats-app-clone-5cab4",
  storageBucket: "whats-app-clone-5cab4.appspot.com",
  messagingSenderId: "574871319436",
  appId: "1:574871319436:web:4366cab9d95c2d37991ca9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, provider, db, timestamp };
