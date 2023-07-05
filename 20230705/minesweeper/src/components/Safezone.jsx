import React, { useState } from 'react'

const Safezone = ({place,position,clearStatus,setClear,setVisible}) => {
    // inital state -> empty gray box
    const [safeStatus, setSafeStatus] = useState(false);

    const safeClick = ()=>{
        setSafeStatus(true);
        console.log("clicked : ", place);
        console.log("arrangement : ", position);
        if(clearStatus.length === 5 && clearStatus.filter((num) => num !== 0).length === 0){
            setTimeout(() => {
                alert("Congrats! You managed to dodge all the mines!!");
                setVisible(false);
            }, 100);
        }
        clearStatus.push(position[place]);
        setClear(clearStatus);
        console.log(clearStatus);
    };

    return (
        <div className='safeZone' onClick={safeClick}>
            {safeStatus && (<div>safe</div>)}
        </div>
    )
}

export default Safezone;