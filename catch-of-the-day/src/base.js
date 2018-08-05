import Rebase from "re-base";
import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export {
  firebaseApp
};

// This is a default export
export default base;