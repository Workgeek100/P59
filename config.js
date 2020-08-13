import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBYxs_XgFH6deh1fKqsWEvm7ZYDGFp7elw",
    authDomain: "newsletter-app-2aa6a.firebaseapp.com",
    databaseURL: "https://newsletter-app-2aa6a.firebaseio.com",
    projectId: "newsletter-app-2aa6a",
    storageBucket: "newsletter-app-2aa6a.appspot.com",
    messagingSenderId: "996536695413",
    appId: "1:996536695413:web:d27ccf59a656c915a4d63c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();