import React from 'react';
import { Link } from 'react-router-dom';
import { Item, LoginComp } from '../components';

const Order = () => {

    return (
        <div>
            <LoginComp />
            <Link to={"/mypage"}>my orders</Link> <br/>
            <h2>order here</h2>
            <Item />
        </div>
    )
}

export default Order;