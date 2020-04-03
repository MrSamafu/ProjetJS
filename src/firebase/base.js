
//Import Api Firebase , Authenticate and Database for the connection

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//  (process.env) import Api Firebase from .env
//  create const config for database
const config = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

// export const config for pull in this page
export default config;
