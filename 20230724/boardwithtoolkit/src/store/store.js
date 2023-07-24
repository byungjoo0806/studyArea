import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counterSlice";

export const store = configureStore(
    {
        reducer : {
            login : counterSlice.reducer,
            addCount : counterSlice.reducer,
            addTitle : counterSlice.reducer,
            addContent : counterSlice.reducer,
            addWriter : counterSlice.reducer,
            remove : counterSlice.reducer
        }
    }
);