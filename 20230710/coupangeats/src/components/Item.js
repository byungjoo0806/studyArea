import React from 'react';
import { useDispatch } from 'react-redux';

const Item = () => {
    const dispatch = useDispatch();
    const orderCS = ()=>{
        dispatch({
            type : "ORDER",
            payload : "club sandwich"
        })
    };

    const orderBW = ()=>{
        dispatch({
            type : "ORDER",
            payload : "buffalo wings"
        })
    };

    const orderRibeye = ()=>{
        dispatch({
            type : "ORDER",
            payload : "rib-eye steak"
        })
    };

    return (
        <div>
            <div>
                club sandwich <br/>
                <button onClick={orderCS}>order</button>
            </div>
            <div>
                buffalo wings <br/>
                <button onClick={orderBW}>order</button>
            </div>
            <div>
                rib-eye <br/>
                <button onClick={orderRibeye}>order</button>
            </div>
        </div>
    )
}

export default Item;