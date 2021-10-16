import axios from "axios";
import firebase from "firebase/compat";
import "firebase/firestore"

const firebaseConfig = {
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





const url = 'https://price-project-1-default-rtdb.europe-west1.firebasedatabase.app'


const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
        "API-KEY": firebaseConfig.apiKey
    }
})




export const priceApi = {
    getPrice() {
        return instance.get('/pricelist.json')
    },
    addPrice(item: any) {
        return instance.post('/pricelist.json', {item})
    },
    removePrice(id: string) {
        console.log(id)
        return instance.delete(`/pricelist/${id}.json`)
    }
}