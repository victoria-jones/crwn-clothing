import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAsohdD1RlElgEDuo5r-vRzAVb664danS8",
    authDomain: "crwn-db-fa927.firebaseapp.com",
    projectId: "crwn-db-fa927",
    storageBucket: "crwn-db-fa927.appspot.com",
    messagingSenderId: "24861547474",
    appId: "1:24861547474:web:724a6aac2c4b62e913460b"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
