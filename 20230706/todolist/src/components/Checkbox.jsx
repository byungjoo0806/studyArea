import React from 'react'
import { useState } from 'react';

const Checkbox = ({checkTrue, checkFalse}) => {
  const [isChecked, setIsChekced] = useState(false);

  const handleCheckboxChange = ()=>{
    setIsChekced(!isChecked);

    if(!isChecked){
      console.log("checked");
      checkTrue();
    }else{
      console.log("un-checked");
      checkFalse();
    }
  };

  return (
    <div className='boardStatus'>
        <input className='checkBox' type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
    </div>
  )
}

export default Checkbox;