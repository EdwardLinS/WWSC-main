/** @format */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "wiser-website.firebaseapp.com",
    projectId: "wiser-website",
    storageBucket: "wiser-website.appspot.com",
    messagingSenderId: "536525066473",
    appId: "1:536525066473:web:fc8b2b017dbc4396136078",
    measurementId: "G-51NLPNKJX4",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

// init auth
const projectAuth = firebase.auth();

// init storage
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
