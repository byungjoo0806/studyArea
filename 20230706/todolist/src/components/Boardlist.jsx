import React, { useState } from 'react';
import Boardnum from './Boardnum';
import Boardcontent from './Boardcontent';
import Checkbox from './Checkbox';


const Boardlist = ({line,updateLineContent}) => {

    return (
        <div className='boardList'>
            <Boardnum num={line.id} />
            <Boardcontent content={line.content} />
            <Checkbox />
        </div>
    )
}

export default Boardlist;