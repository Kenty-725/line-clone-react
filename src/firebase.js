import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Firebase初期化前の追加設定
if (window.location.hostname === "localhost") {
  firebaseConfig.authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
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
