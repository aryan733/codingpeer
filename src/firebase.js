import firebase from "firebase";
import "firebase/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyCqZlFMKh3sOkWLXn4YhDvc1x7St366VoA",
  authDomain: "codingpeer-24fb0.firebaseapp.com",
  projectId: "codingpeer-24fb0",
  storageBucket: "codingpeer-24fb0.appspot.com",
  messagingSenderId: "77867419178",
  appId: "1:77867419178:web:9f9463a636f4402444e553",
  measurementId: "G-KBLDEQJ3N1"
});

export default app;
export const auth = app.auth();
export const database = firebase.database();
export const storage = firebase.storage();
export const firebaseapp = firebase;
