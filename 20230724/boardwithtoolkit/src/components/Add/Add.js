import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addContent, addTitle, addCount, addWriter } from '../../features/counterSlice';

const Addbox = () => {
    const dispatch = useDispatch();

    const [title,setTitle] = useState("");
    console.log(title);
    const [content,setContent] = useState("");
    console.log(content);

    const handleTitle = ()=>{
        dispatch(addCount())
        dispatch(addTitle(title));
        dispatch(addContent(content));
        dispatch(addWriter());
    };

    return (
        <>
            <div>Add</div> <br/>
            <label>title</label> <br/>
            <input type='text' onChange={(e)=>setTitle(e.target.value)}></input> <br/>
            <label>content</label> <br/>
            <textarea rows={30} cols={30} onChange={(e)=>setContent(e.target.value)}></textarea> <br/>
            <Link to={"/main"}>
                <button onClick={()=>handleTitle()}>add</button>
            </Link>
        </>
    )
}

export default Addbox;