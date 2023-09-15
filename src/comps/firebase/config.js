import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEjE6V1w21a20dNj3uvhfGYGRMbMCdT5s",
  authDomain: "ilonagallery.firebaseapp.com",
  projectId: "ilonagallery",
  storageBucket: "ilonagallery.appspot.com",
  messagingSenderId: "580006602943",
  appId: "1:580006602943:web:2e70fb83e6e62b98f8fe0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;