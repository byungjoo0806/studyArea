// redux 라이브러리에서 제공되는 함수
// reducer 함수를 합쳐주는 동작을 해준다.

// combineReducers() 함수에 매개변수로 reducer 함수들을 전달해준다.

import { combineReducers } from "redux";
import loginReducer from "./login";
import weatherReducer from "./weather";

// combineReducers : 합쳐줄 reducer 함수들을 객체로 전달
const rootReducer = combineReducers({loginReducer, weatherReducer});

export default rootReducer;