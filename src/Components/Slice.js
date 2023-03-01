import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name : 'mySlice',
    initialState : [],
    reducers : {
        updateData : (state,action)=>{
            console.log("Updating data with payload : ",action.payload);
            state = action.payload;
            return state;
        },
        deleteData : (state,action)=>{
            console.log("Deleting Data");
            state = [];
            return state;
        }
    }
});

export const {updateData,deleteData} = mySlice.actions;
export default mySlice.reducer;