import axios from "axios";
import firebase from "firebase/compat";
import "firebase/firestore"
import {firebaseConfig, url} from "../firebase";
import { ItemUserType } from "../store/binReducer/BinReducer";
import {ItemsType} from "../store/priceReducer/PriceReducer";


const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
        "API-KEY": firebaseConfig.apiKey,
        // "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
        // "Access-Control-Allow-Methods": "POST",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }
})


export const priceApi = {
    getPrice() {
        return instance.get('/pricelist.json')
    },
    addPrice(item: ItemsType) {
        return instance.post('/pricelist.json', {item})
    },
    removePrice(id: string) {
        return instance.delete(`/pricelist/${id}.json`)
    }
}


export const userApi = {
    getBin(id: string) {
        return instance.get(`/bin/${id}.json`)
    },
    addBin(id: string, item: ItemUserType) {
        return instance.post(`/bin/${id}.json`, {item})
    },
    removeBin(userId: string, id: string) {
        return instance.delete(`/bin/${userId}/${id}.json`)
    }
}