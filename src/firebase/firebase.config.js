import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBpc925tLQ2IjoWTxio66LkkH2dSxRD9JI",
    authDomain: "journal-app-41f49.firebaseapp.com",
    projectId: "journal-app-41f49",
    storageBucket: "journal-app-41f49.appspot.com",
    messagingSenderId: "400007559231",
    appId: "1:400007559231:web:c9ec1c5be0198a608ca08a"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {
      db,
      googleAuthProvider,
      firebase
  }