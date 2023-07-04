// rcc - react class component
// import React, { Component } from 'react'

// export default class Mycom3 extends Component {
//   render() {
//     return (
//       <div>Mycom3</div>
//     )
//   }
// }

// 함수형 컴포넌트를 만들어보자.
// rafce - react arrow function component export

import React, { useEffect, useState } from 'react'

// 함수형 컴포넌트의 state와 props 값은 어떻게 관리 해야하나
// react hook - useState userEffect
// useState : 상태값을 만들어준다. 상태값을 수정할때 사용할 메소드를 만들어준다.
// useEffect : 라이프사이클을 지원해준다.

// 함수형 컴포넌트의 props 값은 함수의 매개변수로 전달된다.
// 구조분해 할당해서 props 안에 있는 값을 사용해도 상관없음
const Mycom3 = ({newNum,newNum2,newNum3}) => {
    console.log(newNum,newNum2,newNum3);
    // useState : 배열로 반환; 첫번째 변수 - 상태변수(상태값), 두번째 변수 - 상태변수를 업데이트할 함수
    // 매개변수로 전달되는 값이 초기값 - ex) useState(0) : 초기값 = 0
    const [num, setNum] = useState(0);
    const [active, setAct] = useState(false);
    
    // count 변수 let 으로 선언
    let count = 0; // 리렌더링 되면서 변수가 다시 선언되면서 변수값이 0으로 초기화된다

    // useEffect : 라이프사이클 함수
    // 첫번째 매개변수 - 함수, 두번째 매개변수 - 배열
    // 두번째 매개변수의 상태를 확인하고 첫번째 매개변수로 들어온 함수를 실행시킨다
    // 두번째 매개변수로 빈배열을 전달한 경우, componentDidMount가 실행
    // 두번째 매개변수로 전달된 배열의 값이 수정된 경우, componentDidMount와 componentDidUpdate가 실행
    useEffect(()=>{
        console.log("componentDidMount");
    },[]);

    useEffect(()=>{
        // 두번째 매개변수로 들어간 값에 변화가 생긴 경우에 실행 - num 이 변경된 경우 실행
        // 제어문을 사용해서 만들어주면 된다
        // componentDidUpdate
        console.log("componentDidMount","componentDidUpdate");
        // 상태가 변하고 나서의 값을 사용하는 라이프사이클 함수
        console.log("i am num");
        console.log("state : ",num);
    },[num]);

    useEffect(()=>{
        // active가 변경된 경우 실행
        console.log("i am active");
        console.log("activity : ",active);
    },[active]);

    useEffect(()=>{
        // num 과 active 둘 중 하나만 변경이 되더라도 실행
        console.log("num or active, one or the other has changed");
    },[num,active]);

    function clickHandler(){
        console.log("clicked");
        // 상태값을 사용하는 이유 - 이전의 상태값이 보관된다.
        // 상태값이 계속 유지가 되는건데, 
        setNum(num + 1); // 상태를 변경 - componentDidUpdate
        count++;
        console.log("변수 count : ",count);
        // console.log("state : ",num);
        // 실수가 많으니까 주의!!
        // 상태값을 수정하고 바로 값을 사용할 수 없음
    };

    function activeHandler(){
        setAct(!active);
    };

    return (
        <div>
            <button onClick={clickHandler}>increase state</button>
            <button onClick={activeHandler}>active/inactive</button>
        </div>
    )
}

export default Mycom3;


