import React from 'react';
import {Link, useNavigate} from "react-router-dom";
// Link는 리엑트에서 a태그와 같은 역할을 해준다.
// 페이지가 새로고침 되지 않고 url만 변경이 되는 것.

// useNavigate - react hook 함수 : 페이지 전환을 위해 사용
const Body = ({path,name,login,item}) => {
    const nav = useNavigate();
    return (
        <div className='body'>
            <Link to={path}>{name}</Link>
            <button onClick={()=>{
                nav(path);
            }}>{name}</button>

            {item && item.id ? <div>{item.id}</div> : null}
            {item && item.num ? <div>#{item.num}</div> : null}
            {item && item.name ? <div>name : {item.name}</div> : null}
            {login ? <div>logged in</div> : <div>logged out</div>}
        </div>
    )
}

export default Body;