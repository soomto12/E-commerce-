import {createSlice} from "@reduxjs/toolkit";

 const uislice= createSlice({
    name: "ui",
    initialState:{cartIsVisible:false},
    reducers:{
        toggle(state){
state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export default uislice;
export const uiAction = uislice.actions;
