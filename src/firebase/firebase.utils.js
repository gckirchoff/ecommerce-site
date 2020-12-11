import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2QrJGQOGb1sq1q6VAcjYtEa6lQT1SfKA",
    authDomain: "ecommerce-site-b091a.firebaseapp.com",
    projectId: "ecommerce-site-b091a",
    storageBucket: "ecommerce-site-b091a.appspot.com",
    messagingSenderId: "608615823639",
    appId: "1:608615823639:web:d0c8ffd433daa215ce1f52",
    measurementId: "G-D2SE3G6313"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;