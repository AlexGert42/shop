import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ItemsType } from "../priceReducer/PriceReducer";

//
// export const addItem = createAsyncThunk('bin/addItem', async (id: string, thunkAPI) => {
//
//     let res = id
// })


type BinStateType = {
    userBin: ItemsType[]
    fullCost: number
}
const initialState: BinStateType = {
    userBin: [],
    fullCost: 0
}


const slice = createSlice({
    name: 'bin',
    initialState: initialState,
    reducers: {
        addItemAction(state, action: PayloadAction<{ item: ItemsType }>) {
            state.fullCost += Number(action.payload.item.cost)
            state.userBin.push(action.payload.item)
        },
        // removeItemaction(state, action: PayloadAction<{ id: string }>) {
        //     state.userBin = state.userBin.filter(el => el !== )
        // }
    },
    extraReducers: (builder) => {
        // builder.addCase(, (state, action) => {
        //
        // })
    }
})

export const BinReducer = slice.reducer

export const {addItemAction} = slice.actions