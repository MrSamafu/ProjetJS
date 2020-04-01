import firebase from 'firebase';

const app = {
    apiKey: "AIzaSyDlYuoRyIVqECKnVn5w1JXcosTAZRs3HtQ",
    authDomain: "overprojet.firebaseapp.com",
    databaseURL: "https://overprojet.firebaseio.com",
    projectId: "overprojet",
    storageBucket: "overprojet.appspot.com",
    messagingSenderId: "368349389877",
    appId: "1:368349389877:web:aaf4f9b9d1f5a99bd63d7c"
};
// Initialize Firebase
firebase.initializeApp(app);
export default app;