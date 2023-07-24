import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk 메소드
// api 따로 없으니까 날씨 api 썼던거 가져오자
export const tempThunk = createAsyncThunk("/temp",async(city)=>{
    // axios
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c5fef0dacf87c72039436e6a426e8f4`);
    const {data} = resp;
    console.log(data);
    return data;
});

// createSlice 메소드 - 
export const countSlice = createSlice({
    // Slice 구분 이름
    name : "count",
    // 초기값
    initialState : {num : 0, value : "i am state value"},
    reducers : {
        add : (state)=>{
            // 이전 상태값이 매개변수로 들어온다.
            state.num += 1;
        },
        subtract : (state)=>{
            state.num -= 1;
        }
    }
});

export const countSlice2 = createSlice({
    // Slice 구분 이름
    name : "count2",
    // 초기값
    initialState : {num : 0},
    // reducers : 동기적인 작업을 처리하고
    reducers : {
        add2 : (state)=>{
            // 이전 상태값이 매개변수로 들어온다.
            state.num += 1;
        },
        subtract2 : (state)=>{
            state.num -= 1;
        }
    },
    // extraReducers : 비동기 작업은 여기서 처리
    extraReducers : (builder)=>{
        // 매개변수로 builder를 받는다.
        // 상태의 케이스 추가 - builder.addCase()
        // 케이스 : 로딩중,완료,실패
        // .pending - 로딩중
        // .fulfilled - 로딩 완료
        // .rejected - 로딩 실패

        // 로딩중 케이스
        builder.addCase(tempThunk.pending, (state,action)=>{
            state.value = "i am pending";
        });
        // 완료되었을떄 케이스
        builder.addCase(tempThunk.fulfilled, (state,action)=>{
            console.log(action);
            state.value = "i am fulfilled";
            state.num += 1;
        });
        // 실패했을때 케이스
        builder.addCase(tempThunk.rejected, (state,action)=>{
            console.log(action);
            state.value = "i am rejected";
        });
    }
});


// actions 라는 키에 reducers로 설정한 함수들이 들어온다.
// reducers -> actions
// action 함수를 내보내서 dispatch로 전달해서 액션 발생시킬 예정
export const {add,subtract} = countSlice.actions;
export const {add2,subtract2} = countSlice2.actions;