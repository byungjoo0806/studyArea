import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "new",
    initialState : {
        user : "",
        count : 0,
        id : [],
        title : [],
        content : [],
        writer : []
    },
    reducers : {
        login : (state,action) => {
            state.user = action.payload;
        },
        addCount : (state) => {
            state.count++;
            state.id.push(state.count);
        },
        addTitle : (state,action) => {
            state.title.push(action.payload);
        },
        addContent : (state,action) => {
            state.content.push(action.payload);
        },
        addWriter : (state) => {
            state.writer.push(state.user);
        },
        remove : (state) => {
            state.id.splice(-1,1);
            state.title.splice(-1,1);
            state.content.splice(-1,1);
        }
    }
});

export const {login,addCount,addTitle,addContent,addWriter,remove} = counterSlice.actions;