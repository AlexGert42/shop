import firebase from "firebase/compat";

export const firebaseConfig = {
    apiKey: "AIzaSyDfRXJoDjoJKaTLFTwUBPvJwp4c9l8fy8A",
    authDomain: "price-project-1.firebaseapp.com",
    projectId: "price-project-1",
    storageBucket: "price-project-1.appspot.com",
    messagingSenderId: "966095631146",
    appId: "1:966095631146:web:146e0fe533845fd89ae453"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()

export const auth = firebase.auth()



export const url = 'https://price-project-1-default-rtdb.europe-west1.firebasedatabase.app'