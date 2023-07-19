import React from 'react';
import { Itemview, LoginComp } from '../components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Mypage = () => {
    const dispatch = useDispatch();

    const emptyList = ()=>{
        dispatch({
            type : "EMPTY"
        })
    };

    return (
        <div>
            <LoginComp />
            <Link to={"/order"}>back to ordering</Link>
            <h2>my orders</h2>
            <Itemview /> <br/>
            <button onClick={emptyList}>empty</button>
        </div>
    )
}

export default Mypage;