import React, { useState } from 'react';
import Boardnum from './Boardnum';
import Boardcontent from './Boardcontent';
import Checkbox from './Checkbox';
import { useEffect } from 'react';


const Boardlist = ({line}) => {
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        console.log(checked);
    },[checked]);

    const checkTrue = ()=>{
        setChecked(true);
    };

    const checkFalse = ()=>{
        setChecked(false);
    };

    const listStyle = {
        backgroundColor : checked ? 'gray' : 'white',
        color : checked ? 'white' : 'black',
        opacity : checked ? '0.5' : '1'
    };

    return (
        <div className='boardList' style={listStyle}>
            <Boardnum num={line.id} />
            <Boardcontent content={line.content} />
            <Checkbox checkTrue={checkTrue} checkFalse={checkFalse} />
        </div>
    )
}

export default Boardlist;