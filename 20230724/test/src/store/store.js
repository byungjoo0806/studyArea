import { configureStore } from "@reduxjs/toolkit";
import { countSlice, countSlice2 } from "../features/countSlice";

// store 생성 (가게 생성)
export const store = configureStore(
    {
        reducer : {
            // 메뉴판 생성
            // reducer를 전달
            // countSlice와 countSlice2 에서는 reducers 라는 키로 전달했지만,
            // 받을때는 reducer 로 받는다.
            count : countSlice.reducer,
            count2 : countSlice2.reducer
        },
    }
)