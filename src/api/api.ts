import firebase from "firebase/compat";
import "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfRXJoDjoJKaTLFTwUBPvJwp4c9l8fy8A",
    authDomain: "price-project-1.firebaseapp.com",
    projectId: "price-project-1",
    storageBucket: "price-project-1.appspot.com",
    messagingSenderId: "966095631146",
    appId: "1:966095631146:web:146e0fe533845fd89ae453"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore()