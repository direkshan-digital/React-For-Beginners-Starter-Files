import Rebase from "re-base";
import Firebase from "firebase";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyBTIR8Jo_G5Hmq7TlA6o0EUYuSVqLCWCOo",
  authDomain: "catch-of-the-day-23516.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-23516.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export 
export {
  firebaseApp
};

// This is a default export
export default base;