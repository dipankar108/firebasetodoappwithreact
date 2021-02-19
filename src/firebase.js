// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    { apiKey: "firebase",
  authDomain: "firebase",
  projectId: "fire-base-todo-app-with-react",
  storageBucket: "fire-base-todo-app-with-react.appspot.com",
  messagingSenderId: "sfs89060183",
  appId:"1:680889060sfsdf184a8226e514966ddcc12",
  measurementId: "G-W8YS5adfsafJ"}
)
const db = firebaseApp.firestore();
export default db ;