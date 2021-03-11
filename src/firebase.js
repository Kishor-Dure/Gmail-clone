import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYHyNB6bHEOsuKF0Wil6Ikx8tqR63ZBwg",
    authDomain: "email-app-2976b.firebaseapp.com",
    projectId: "email-app-2976b",
    storageBucket: "email-app-2976b.appspot.com",
    messagingSenderId: "865397539282",
    appId: "1:865397539282:web:982e563009016f078b080b",
    measurementId: "G-HEE7YBS9KT"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider};