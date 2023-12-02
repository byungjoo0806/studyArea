import React, { useMemo, useState } from 'react';

const Memo = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    const countHandler = ()=>{
        console.log("i am count");
        setCount(count + 1);
    };

    const count1Handler = useMemo(()=>{
        console.log("count 1");
        return (
            count
        )
    },[count]);
    
    // 컴포넌트의 리렌더링을 관리하고 싶음
    // 부모 컴포넌트가 리렌더링되면 자식 컴포넌트가 리렌더링 되는데
    // 부모 컴포넌트 안에 자식 컴포넌트가 많으면 전부 리렌더링 되는데, 그럼 페이지 최적화가 되지 않는다.
    const count2Handler = useMemo(()=>{
        console.log("i am count2");
        return (
            count2 + 1
        );
    },[count2]);
    // count2를 주시하고 있다가 값이 변하면 새로운 값으로 업데이트하고 리렌더링
    // 값이 변하지 않으면 리렌더링을 안함

    return (
        <div>
            <p>memo</p>
            <p>handleCount : {count1Handler}</p>
            <button onClick={countHandler}>plus</button>
            <p>handleCount2 : {count2Handler}</p>
        </div>
    )
}

export default Memo;