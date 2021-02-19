// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    { apiKey: "AIzaSyCi3EClQVqQ5qS35cTXgG7yw1zamCVQ6ZA",
  authDomain: "fire-base-todo-app-with-react.firebaseapp.com",
  projectId: "fire-base-todo-app-with-react",
  storageBucket: "fire-base-todo-app-with-react.appspot.com",
  messagingSenderId: "680889060183",
  appId:"1:680889060183:web:4184a8226e514966ddcc12",
  measurementId: "G-W8YS5XPKBJ"}
)
const db = firebaseApp.firestore();
export default db ;