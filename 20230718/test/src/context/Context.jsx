import React, {createContext,useContext, useState} from 'react';

// useContext - 리엑트에서 제공해주는 내장 hook 함수이다.
// 전역 상태 관리를 도와주는 함수
// 리엑트는 데이터의 흐름이 단방향 - 부모에서 자식으로 props로 전달하기 때문에 불편하다.
// useContext - props로 데이터를 넘겨주지 않아도 컴포넌트들이 데이터를 공유할 수 있도록 context 사용

const Global = createContext();
// createContext - Global 객체 생성; context 객체 생성

const Context01 = ()=>{
    return <Context02></Context02>
}

const Context02 = ()=>{
    const {name, setName} = useContext(Global);
    // Global.Provider에서 value로 전달한 값을 받기 위해
    // useContext() 매개변수로 context 객체를 전달한다.
    return <>
        my name is {name} <br/>
        <br/>
        <button onClick={()=>{setName(name === "andy" ? "candy" : "andy")}}>change name</button>
    </>
}

// Context - 최상단 부모 컴포넌트
const Context = () => {
    // 부모의 상태변수
    const [name,setName] = useState("andy");
    // 부모의 상태변수 name, 상태변수 업데이트 함수 setName 을 객체의 키값으로 obj에 선언
    const obj = {
        name,
        setName
    };

    return (
        // 전역상태를 관리할떄 Global.Provider를 최상단 트리로 감싸주고
        // value - 정해진 키; 전달할 데이터를 넣어준다. (전역 상태))
        // Global.Provider 안에 있는 Context01 컴포넌트와 그 자식 컴포넌트들은 다 접근할 수 있는 전역 상태
        // Global.Provider 바깥에서는 접근 불가
        <Global.Provider value={obj}>
            <Context01></Context01>
        </Global.Provider>
    )
}

export default Context;