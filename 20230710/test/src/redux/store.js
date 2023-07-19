// store 만들기

import { createStore } from "redux";
// reducer 함수 가져오기
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// createStore 메소드 : 저장소 만듬 (반환값이 저장소)
// store 만들었고, reducer 만들었고
// 음식점 만들었고, 메뉴판 만들었고

// composeWithDevTools - 스토어의 전역상태가 변화하는걸 개발 모드로 확인 가능한 툴
let store = createStore(reducer, composeWithDevTools());

export default store;