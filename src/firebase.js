import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCOildZpNOcWuoJMqMZ38hBA08V7qgjjE",
  authDomain: "line-clone-4b1f2.firebaseapp.com",
  projectId: "line-clone-4b1f2",
  storageBucket: "line-clone-4b1f2.firebasestorage.app",
  messagingSenderId: "775404453581",
  appId: "1:775404453581:web:360842825486fad91df384",
};

// Firebase初期化前の追加設定
if (window.location.hostname === "localhost") {
  firebaseConfig.authDomain = "line-clone-4b1f2.firebaseapp.com";
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// Firestoreの設定
db.settings({
  ignoreUndefinedProperties: true,
});

const auth = firebase.auth();

// Firestoreの設定を確認
console.log("Firestore initialized:", db);

export { db, auth };
