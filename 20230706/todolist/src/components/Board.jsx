import React, { useState } from 'react';
import Boardheader from './Boardheader';
import Boardlist from './Boardlist';
import Newtask from './Newtask';

const Board = ({setChecked}) => {
    // initial list state
    const [list,setList] = useState([{id : 1, content : ""}]);

    const addNewLine = ()=>{
        const newId = list.length + 1;
        const newLine = {id : newId, content : ""};
        setList([...list,newLine]);
    };

    const updateLineContent = (id,content) => {
        const updatedList = list.map((line)=>
            line.id === id ? {...line, content} : line
        );
        setList(updatedList);
    };

    let boardList = list.map((line)=> (
        <Boardlist key={line.id} line={line} updateLineContent={updateLineContent} />
    ))

    return (
        <div className='board'>
            <h2 className='boardTitle'>to do list</h2>
            <Boardheader />
            {boardList}
            <Newtask addNewLine={addNewLine} />
        </div>
    )
}

export default Board;