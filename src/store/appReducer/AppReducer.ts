import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ModalItemType } from "../../components/modal/Modal";
import {auth} from "../../firebase";
import {fetchUser} from "../binReducer/BinReducer";
import {ItemsType} from "../priceReducer/PriceReducer";


//thunk
export type UserDataType = {
    email: string
    password: string
}


export const authMe = createAsyncThunk('app/authMe', async (data: UserDataType, thunkAPI) => {

    let res: any = await auth.signInWithEmailAndPassword(data.email.trim(), data.password.trim())
    return {auth: true, userData: res.user.multiFactor.user.email}

})


export const signOut = createAsyncThunk('app/signOut', async (arg, thunkAPI) => {
    await auth.signOut()
    thunkAPI.dispatch(fetchUser())
    return {auth: false, userData: ''}
})


//reducer

type appStateType = {
    initApp: boolean
    auth: boolean
    userData: string
    modal: boolean
    modalCntent: ModalItemType
}
const initialState: appStateType = {
    initApp: false,
    auth: false,
    userData: '',
    modal: false,
    modalCntent: {
        name: '',
        discription: ''
    }
}


const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        showModal(state, action: PayloadAction<{value: boolean, item: ModalItemType}>) {
            state.modal = action.payload.value
            state.modalCntent = action.payload.item


        }
    },
    extraReducers: (builder) => {
        builder.addCase(authMe.fulfilled, (state, action) => {
            state.auth = action.payload.auth
            state.userData = action.payload.userData
        })
        builder.addCase(signOut.fulfilled, (state, action) => {
            state.auth = action.payload.auth
            state.userData = action.payload.userData
        })
    }
})

export const AppReducer = slice.reducer

export const {showModal} = slice.actions