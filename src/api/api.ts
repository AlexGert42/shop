import axios from "axios";
import firebase from "firebase/compat";
import "firebase/firestore"
import {firebaseConfig, url } from "../firebase";




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