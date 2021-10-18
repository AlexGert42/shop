import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {auth} from "../../firebase";
import {fetchUser} from "../binReducer/BinReducer";


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
}
const initialState: appStateType = {
    initApp: false,
    auth: false,
    userData: ''
}


const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {},
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