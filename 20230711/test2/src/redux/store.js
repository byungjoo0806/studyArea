import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

// 사용할 미들웨어는 thunk
import thunk from "redux-thunk";

// 미들웨어 추가
// applyMiddleware 함수로 미들웨어 추가; 이 미들웨어에서는 객체를 반환하는데, 그 객체는 함수를 담고 있다.

// 미들웨어로 thunk를 추가하는 방법은
// applyMiddleware 함수의 매개변수로 사용할 미들웨어 전달
// applyMiddleware(thunk)

// 음식점 하나 오픈했음. 근데 어떤 음식점임?
export const store = createStore(rootReducer,applyMiddleware(thunk));