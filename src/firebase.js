import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB0r7PkRqkC1nz26MYI3wM4_ekrwhDaNMU",
    authDomain: "slack-clone-yt-12a05.firebaseapp.com",
    projectId: "slack-clone-yt-12a05",
    storageBucket: "slack-clone-yt-12a05.appspot.com",
    messagingSenderId: "551488187323",
    appId: "1:551488187323:web:63b7ee97f1f8c9eb92329e"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db }