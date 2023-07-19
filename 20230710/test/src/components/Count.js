import React from 'react';
import { useDispatch } from 'react-redux';

// 전역상태에 있는 값을 업데이트 해줄건데
// useDispatch 훅 - 액션을 보낼 수 있게 해주는 react hook 함수
const Count = () => {
    // useDispatch
    const dispatch = useDispatch();
    // dispatch 함수를 사용해서 action을 던질 수 있다.
    // dispatch 함수를 사용할때 매개변수로 객체를 전달해주자.
    // 객체의 규칙은 {type, payload}
    // type : 동작시킬 행동의 이름
    // payload : 선택사항 있어도 되고 없어도 됨; 상태를 변경할때 데이터 전달이 필요하면 사용

    const handlerAdd = ()=>{
        dispatch({
            type : "kimchi fried rice"
        });
    };

    const handlerRemove = ()=>{
        dispatch({
            type : "egg fried rice"
        })
    };

    return (
        <div>
            <button onClick={handlerAdd}>kimchi</button>
            <button onClick={handlerRemove}>egg</button>
        </div>
    )
}

export default Count;