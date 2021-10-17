import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {auth} from "../../firebase";


//thunk
export type UserDataType = {
    email: string
    password: string
}


export const authMe = createAsyncThunk('app/authMe', async (data: UserDataType, thunkAPI) => {

    let res: any = await auth.signInWithEmailAndPassword(data.email.trim(), data.password.trim())
    console.log(res)
    return {auth: true, userData: res.user.multiFactor.user.email}
    // .catch((error) => {
    //     console.log(error.code);
    //     console.log(error.message);
    // });
})


export const signOut = createAsyncThunk('app/signOut', async (arg, thunkAPI) => {
    let res = await  auth.signOut()
    console.log(res)
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