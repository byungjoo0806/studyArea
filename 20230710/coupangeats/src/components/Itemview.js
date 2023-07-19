import React from 'react'
import { useSelector } from 'react-redux'

const Itemview = () => {
    // 주문 내역 배열 가져오기
    const orderedItem = useSelector(state => state.orders);
    
    // 주문 내역 하나씩 렌더링
    let orderedItems = orderedItem.map((el,index)=>{
        return (
            <div key={index}>
                {index + 1}. {el}
            </div>
        )
    });

    return (
        <>
            {orderedItems}
        </>
    )
}

export default Itemview;