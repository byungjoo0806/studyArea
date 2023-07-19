import React, { useCallback, useState } from 'react';

// 공식 문서에 useCallback은 메모이제이션 콜백을 반환한다는 내용이 있음
// 
const Callback = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    // useCallback() - 첫번째 매개변수 : 콜백함수, 두번째 매개변수 : 배열
    // 이 배열에 들어가는 값이 주시하는 값 (배열이 변경되면, 첫번째 매개변수로 들어온 콜백함수가 돌아간다.)
    const countHandler = useCallback(()=>{
        setCount(count + 1);
        // 복잡한 연산을 사용하는 경우, 근데 그 연산이 동일한 값을 내보내는 경우
        // 동일한 연산일 경우에는 메모이제이션 기법으로 메모리에 가지고 있다가
        // 다른 결과가 필요할 경우에만 다시 메모이제이션 콜백을 반환해서 사용하는 것.
    },[count2]);
    // countHandler - count2 값이 변하기 전까지는 메모이제이션 콜백을 반환한다.

    const count2Handler = useCallback(()=>{
        setCount2(count2 + 1);
    },[count2]);


    return (
        <div>
            <div>
                <h1>first count : {count}</h1>
                <p>i don't change unless count2 changes. i am memoized callback function.</p>
                <button onClick={countHandler}>count</button>
            </div>
            <div>
                <h1>second count : {count2}</h1>
                <button onClick={count2Handler}>count2</button>
            </div>
        </div>
    )
}

export default Callback;