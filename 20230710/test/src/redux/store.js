// store 만들기

// reducer 함수 가져오기
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

// createStore 메소드 : 저장소 만듬 (반환값이 저장소)
// store 만들었고, reducer 만들었고
// 음식점 만들었고, 메뉴판 만들었고

// composeWithDevTools - 스토어의 전역상태가 변화하는걸 개발 모드로 확인 가능한 툴
// let store = createStore(reducer, composeWithDevTools());
let store = configureStore({
    reducer : reducer
});

export default store;