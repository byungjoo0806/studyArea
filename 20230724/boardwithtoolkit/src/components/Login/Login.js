import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../features/counterSlice';

const Loginbox = () => {
    const dispatch = useDispatch();

    const [current,setCurrent] = useState("");
    console.log(current);

    const handleLogin = ()=>{
        dispatch(login(current));
    };

    return (
        <>
            <div>Login</div>
            <label>username</label> <br/>
            <input type='text' onChange={(e)=>setCurrent(e.target.value)} /> <br/>
            <label>password</label> <br/>
            <input type='text'></input> <br/>
            <Link to={"/main"}>
                <button onClick={()=>handleLogin()}>login</button>
            </Link>
            <br/>
            <Link to={"/signup"}>not a member yet?</Link>
        </>
    )
}

export default Loginbox;