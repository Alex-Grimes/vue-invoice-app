import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvqOKrm0BdR3MWiuVjais5_idEfkjXwPk",
    authDomain: "invoice-app-95c00.firebaseapp.com",
    projectId: "invoice-app-95c00",
    storageBucket: "invoice-app-95c00.appspot.com",
    messagingSenderId: "463475172433",
    appId: "1:463475172433:web:754f017a838178030f4470",
    measurementId: "G-5R906GS69Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  export default firebaseApp.firestore();