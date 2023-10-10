import React from 'react'
import { useRef } from 'react';

const Newtask = ({addNewLine}) => {
    const clickAdd = ()=>{
        const chores = document.querySelector(".newContentInput");
        // console.log(chores);
        addNewLine(chores.value);
        chores.value = "";
    }

    const inputRef = useRef(null);

    const handleKeyDown = (event)=>{
        if(event.key === 'Enter'){
            inputRef.current.click();
        }
    }

    return (
        <div className='newContentInputBox'>
            <input onKeyDown={handleKeyDown} className='newContentInput' />
            <button ref={inputRef} onClick={clickAdd}>add</button>
        </div>
    )
}

export default Newtask;