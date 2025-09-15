import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItems : localStorage.getItem("totalItems") 
    ? JSON.parse(localStorage.getItem("totalItems")) 
    : null,
    
}

const cartSlice = createSlice({
    name  : "cart",
    initialState : initialState,
    reducers : {
        setTotalItems(state , value){
            state.totalItems = value.payload
        },
    },
})

export const {setTotalItems} = cartSlice.actions
export default cartSlice.reducer