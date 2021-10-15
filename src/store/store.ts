import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import ThunkMiddleware from 'redux-thunk';
import { AppReducer } from "./appReducer/AppReducer";
import { PriceReducer } from "./priceReducer/PriceReducer";



const rootReducer = combineReducers({
    app: AppReducer,
    price: PriceReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(ThunkMiddleware)
})

export type RootState = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store