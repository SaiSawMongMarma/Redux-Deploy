import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyCX3r902h6uOcr0X_Cwc6M9pEbB9bfPvPE",
    authDomain: "shopping-app-c1aaf.firebaseapp.com",
    projectId: "shopping-app-c1aaf",
    storageBucket: "shopping-app-c1aaf.firebasestorage.app",
    messagingSenderId: "385479503305",
    appId: "1:385479503305:web:87459e71530ae111730c18",
    measurementId: "G-NGNYJ0RC6R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
