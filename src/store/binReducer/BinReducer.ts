import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ItemsType} from "../priceReducer/PriceReducer";
import {auth} from "../../firebase";
import {userApi} from "../../api/api";
import {RootState} from "../store";


export const fetchUser = createAsyncThunk('bin/fetchUser', async (arg, thunkAPI) => {
    let res: any = await auth.signInAnonymously()
    thunkAPI.dispatch(getBinUser(res.user.multiFactor.user.uid))
    return {userId: res.user.multiFactor.user.uid}
})

export const getBinUser = createAsyncThunk('bin/getBin', async (id: string, thunkAPI) => {
    let res: any = await userApi.getBin(id)
    return {carts: res.data}
})

export const addBinItem = createAsyncThunk('bin/addBinItem', async (item: ItemsType, thunkAPI) => {
    let state = thunkAPI.getState() as RootState
    let itemUser: ItemUserType = {...item, _userId: state.bin.user, _idItem: ''}
    let res: any = await userApi.addBin(state.bin.user, itemUser)
    itemUser._idItem = res.data.name
    thunkAPI.dispatch(fetchUser())
    return {item: itemUser}
})

export const removeBinItem = createAsyncThunk('bin/removeBinItem', async (id: string, thunkAPI) => {
    let state = thunkAPI.getState() as RootState
    let res = await userApi.removeBin(state.bin.user, id)
    thunkAPI.dispatch(fetchUser())
    return {id: res.data}
})


export type ItemUserType = ItemsType & {
    _userId: string
    _idItem: string
}


type BinStateType = {
    user: string
    userBin: ItemUserType[] | null
    fullCost: number
    cartCount: number | null
}
const initialState: BinStateType = {
    user: '',
    userBin: null,
    fullCost: 0,
    cartCount: null
}


const slice = createSlice({
    name: 'bin',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload.userId
        })
        builder.addCase(getBinUser.fulfilled, (state, action) => {
            let cost = 0
            if (action.payload.carts) {
                let arrayBin = Object.keys(action.payload.carts).map(key => {
                    cost += Math.fround(Number(action.payload.carts[key].item.cost))
                    return {
                        ...action.payload.carts[key].item,
                        _idItem: key
                    }
                })
                state.userBin = arrayBin
                state.cartCount = arrayBin.length
            } else {
                state.userBin = null
                state.cartCount = null
            }
            state.fullCost = cost
        })
        builder.addCase(addBinItem.fulfilled, (state, action) => {
            if (state.userBin) {
                state.userBin = [...state.userBin, action.payload.item]
            }
        })
        builder.addCase(removeBinItem.fulfilled, (state, action) => {
            if (state.userBin) {
                state.userBin = state.userBin.filter(el => el._userId !== action.payload.id)
            }
        })
    }
})

export const BinReducer = slice.reducer
