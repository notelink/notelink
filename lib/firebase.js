import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDahe-6GdnVlzMLFE-FEB-XE-Edh0PCZKg",
        authDomain: "notelink-87a56.firebaseapp.com",
        projectId: "notelink-87a56",
    });
}

export const db = firebase.firestore();
export const auth = firebase.auth();
