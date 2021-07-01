import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMxI5CUy5xj5-UVsEq71A-ykwe3KABkWk",
  authDomain: "clone-98ac3.firebaseapp.com",
  projectId: "clone-98ac3",
  storageBucket: "clone-98ac3.appspot.com",
  messagingSenderId: "234893666605",
  appId: "1:234893666605:web:8908aa4a6ed47a41c44ba4",
  measurementId: "G-RPWNR3NL8C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
