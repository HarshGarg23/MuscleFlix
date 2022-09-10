
// const initializeApp = require('firebase/firebase-app')
const firebase=require('firebase')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2IXCv06VouPR3qJxk4CBerGZzQJDvDeg",
  authDomain: "paytm-status-b5486.firebaseapp.com",
  projectId: "paytm-status-b5486",
  storageBucket: "paytm-status-b5486.appspot.com",
  messagingSenderId: "397866381852",
  appId: "1:397866381852:web:80be2c8ef16581ee5de5d9",
  measurementId: "G-K59B7M0S6D"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()

module.exports=db;