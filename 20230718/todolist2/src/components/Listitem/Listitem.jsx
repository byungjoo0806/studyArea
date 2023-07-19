import React from 'react';
import {Listcontent, Listitems} from "./Listitem.styled";
import { useSelector } from 'react-redux';

const Listitem = () => {
  const doItem = useSelector(state => state.todolist);

  let doItems = doItem.map((el,index)=>{
    return (
      <Listitems key={index}>
        <Listcontent>{el}</Listcontent>
        <input type="checkbox" />
      </Listitems>
    )
  });

  return (
    <div>
        {doItems}
    </div>
  )
}

export default Listitem;