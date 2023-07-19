import React from 'react'

const Newtask = ({addNewLine}) => {
    const clickAdd = ()=>{
        addNewLine();
    }

    return (
        <div className='newContentInputBox'>
            <textarea name="" cols="30" rows="10" className='newContentInput'></textarea>
            <button onClick={clickAdd}>add</button>
        </div>
    )
}

export default Newtask