import React, {useReducer} from 'react';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 더하기 뺄셈만 간단하게 구현

// useState를 사용하던 것과 별로 크게 차이가 없음
// React에서 제공해주는 내장 hook 함수

const Reducer = () => {
    // 상태 초기값
    const init = {
        count : 0
    };

    // reducer 함수 - 매개변수로 상태와 액션값을 넣어줄 예정 (콜백 함수)
    // 반환값이 있어야하기 때문에 switch문의 break가 아니라 return
    const reducer = (state,action)=>{
        // action객체에 type 이라는 키값을 전달받을 거임
        const {type} = action;
        switch (type) {
            case INCREMENT:
                // 이전 상태를 가지고 기능을 작성한 뒤에 반환값으로 상태를 업데이트 해주면 된다.
                return {...state,count : state.count + 1};
            case DECREMENT:
                return {...state,count : state.count - 1};
            default:
                return state;
        }
    };

    // useReducer 함수 - 첫번째 매개변수는 메뉴판, 두번째 매개변수는 초기값
    const [state,dispatch] = useReducer(reducer,init);

    return (
        <div>
            current count : {state.count}
            <button onClick={()=>{dispatch({type : INCREMENT})}}>plus</button>
            <button onClick={()=>{dispatch({type : DECREMENT})}}>minus</button>
        </div>
    )
}

export default Reducer;