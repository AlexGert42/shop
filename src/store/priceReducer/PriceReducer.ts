import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {priceApi} from "../../api/api";


//thunk


export const fetchPrice = createAsyncThunk('price/fetchPrice', async (arg, thunkAPI) => {
    let res: any = await priceApi.getPrice()
    return {items: res.data}
})


export const addPrice = createAsyncThunk('price/addPrice', async (item: any, thunkAPI) => {
    let res: any = await priceApi.addPrice(item)
    return {item: {...item, _id: res.data.name}}
})

export const removePrice = createAsyncThunk('price/removePrice', async (id: string, thunkAPI) => {
    let res = await priceApi.removePrice(id)
    return {id}
})


//reducer

export type ItemsType = {
    _id: string
    name: string
    cost: string
    discription: string
}


type AppStateType = {
    items: ItemsType[] | any
}
const initialState: AppStateType = {
    items: null
}


const slice = createSlice({
    name: 'price',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPrice.fulfilled, (state, action) => {
            let payload = Object.keys(action.payload.items).map(key => {
                return {
                    ...action.payload.items[key].item,
                    _id: key
                }
            })
            state.items = payload
        })
        builder.addCase(addPrice.fulfilled, (state, action) => {
            state.items = [...state.items, action.payload.item]
        })
        builder.addCase(removePrice.fulfilled, (state, action) => {
            state.items = state.items.filter((el: any) => el._id !== action.payload.id)
        })
    }
})

export const PriceReducer = slice.reducer