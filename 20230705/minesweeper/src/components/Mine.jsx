import React, { useState } from 'react'
import { mineImg } from '../img';

const Mine = ({place,position,setVisible}) => {
    // inital game board set up -> empty gray box
    const [showSafe, setShowSafe] = useState(false);

    const mineClick = ()=>{
        setShowSafe(true);
        console.log("clicked : ",place);
        console.log("arrangement : ",position);
        setTimeout(() => {
            alert("Stepped on a mine. Game Over");
            setVisible(false);
        }, 100);
    }

    return (
        <div className='mineTile' onClick={mineClick}>
            {showSafe && (<img src={mineImg} alt="" />)}
        </div>
    )
}

export default Mine;