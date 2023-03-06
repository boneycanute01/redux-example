import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
    name : "mySlice",
    initialState : {value : 123},
    reducers : {
        increment : (state,action)=>{
            state.value = state.value + Number(action.payload);
        },
        decrement : (state,action)=>{
            state.value = state.value - Number(action.payload);
        }
    }
});


export const {increment,decrement}= mySlice.actions;
export default mySlice.reducer;