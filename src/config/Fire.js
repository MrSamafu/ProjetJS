import firebase from 'firebase';

const fire = {
    apiKey: "AIzaSyDG5Iic9_1HQm1ZsT9mdTIzqAJ62xa3SJ0",
    authDomain: "overview-3625b.firebaseapp.com",
    databaseURL: "https://overview-3625b.firebaseio.com",
    projectId: "overview-3625b",
    storageBucket: "overview-3625b.appspot.com",
    messagingSenderId: "624543184803",
    appId: "1:624543184803:web:c113a305be4e47f7ba0c16",
    measurementId: "G-VSY8GJ6Z3F"
};
const fire = firebase.initializeApp(fire);
export default fire;