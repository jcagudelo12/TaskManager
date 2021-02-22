import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8g_nm_RNHFACWjiUqgws59O4AkkoVNHc",
  authDomain: "taskmanager-fe109.firebaseapp.com",
  projectId: "taskmanager-fe109",
  storageBucket: "taskmanager-fe109.appspot.com",
  messagingSenderId: "12817322604",
  appId: "1:12817322604:web:c99141629eb27ab475fe49",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
