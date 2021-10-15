import {createSlice} from "@reduxjs/toolkit";



//thunk


















//reducer

export type ItemsType = {
    id: string
    name: string
    cost: string
    discription: string
}


type AppStateType = {
    items: ItemsType[]
}
const initialState: AppStateType= {

    items: [
        {id: '1', name: 'book', cost: '2343', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis labore nam quam voluptates voluptatibus. Ad, aliquam animi dolores eius et, eum, fuga incidunt obcaecati pariatur quis quod tempore?\n'},
        {id: '2', name: 'milk', cost: '2343', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis labore nam quam voluptates voluptatibus. Ad, aliquam animi dolores eius et, eum, fuga incidunt obcaecati pariatur quis quod tempore?\n'},
        {id: '3', name: 'bred', cost: '2343', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis labore nam quam voluptates voluptatibus. Ad, aliquam animi dolores eius et, eum, fuga incidunt obcaecati pariatur quis quod tempore?\n'},
        {id: '4', name: 'apple', cost: '2343', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis labore nam quam voluptates voluptatibus. Ad, aliquam animi dolores eius et, eum, fuga incidunt obcaecati pariatur quis quod tempore?\n'},
        {id: '5', name: 'chery', cost: '2343', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis labore nam quam voluptates voluptatibus. Ad, aliquam animi dolores eius et, eum, fuga incidunt obcaecati pariatur quis quod tempore?\n'},
        {id: '6', name: 'coco-cola', cost: '2343', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis labore nam quam voluptates voluptatibus. Ad, aliquam animi dolores eius et, eum, fuga incidunt obcaecati pariatur quis quod tempore?\n'},
        {id: '7', name: 'pineapple', cost: '2343', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim facilis labore nam quam voluptates voluptatibus. Ad, aliquam animi dolores eius et, eum, fuga incidunt obcaecati pariatur quis quod tempore?\n'},
    ]
}






const slice = createSlice({
    name: 'price',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const PriceReducer = slice.reducer