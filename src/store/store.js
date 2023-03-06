import { configureStore } from "@reduxjs/toolkit";
import mySliceReducer from '../features/Slice'

const store = configureStore({
    reducer : {
        mySliceKey : mySliceReducer
    }
});

export default store;