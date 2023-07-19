import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginComp = () => {
    // 값을 action으로 reducer로 넘기기
    const dispatch = useDispatch();

    const loginHandler = ()=>{
        dispatch({
            type : "LOGIN",
            payload : true
        })
    };

    const logoutHandler = ()=>{
        dispatch({
            type : "LOGOUT",
            payload : false
        })
    };

    let result;
    if(useSelector(state => state.isLogin) === false){
        result = (
            <div>
                <Link to={"/order"}>
                    <button onClick={loginHandler}>login</button>
                </Link>
            </div>
        )
    }else{
        result = (
            <div>
                <Link to={"/login"}>
                    <button onClick={logoutHandler}>logout</button>
                </Link>
            </div>
        )
    }

    return (
        <>
            {result}
        </>
    );
};

export default LoginComp;