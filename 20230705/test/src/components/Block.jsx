import React from 'react'

const Block = ({data,name,result}) => {
    let temp = "";
    if(name === "player"){
        temp = result;
    }else{
        // result == "draw" -> 문제가 없음
        // result == "win", result == "lose" -> 컴퓨터의 결과는 반대로 보여줘야함
        temp = result === "draw" ? "draw" : result === "win" ? "lose" : "win";
    };

    if(result === ""){
        temp = "";
    };

    return (
        <div className='block'>
            <div>{name}</div>
            {/* 리엑트에서 이미지 import 해오는 방법 */}
            {/* 리엑트에서 가장 많이 사용하는 조건부 렌더링 */}
            {/* 값이 있으면 값을 사용해라 라는 구문 */}
            {/* 값이 없으면 페이지가 터지기 때문에 */}
            <img src={data && data.img} alt="" />
            <div>{temp}</div>
        </div>
    );
}

export default Block