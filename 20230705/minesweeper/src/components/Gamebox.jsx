import React, { useState } from 'react'
import Mine from './Mine';
import Safezone from './Safezone';

const Gamebox = ({newGameGenerator,position}) => {
    console.log("new mine arrangement : ", position);
    // show and hide mine game box
    const [visible, setVisible] = useState(false);
    // determine game result
    const [clear, setClear] = useState([]);

    const showHide = ()=>{
        setVisible(true);
        setClear([]);
    }


    let div;
    let button;
    let tiles;
    // render game box
    if(position === null){
        div = <div className='gameBoxTitle'>Minesweeper</div>;
        button = <button onClick={()=>{ newGameGenerator(); showHide(); }}>new game</button>
    }else{
        tiles = position.map((tileValue, index)=>{
            if(tileValue === 0){
                return <Safezone key={index} place={index} position={position} clearStatus={clear} setClear={setClear} setVisible={setVisible}/>;
            }else{
                return <Mine key={index} place={index} position={position} setVisible={setVisible}/>;
            }
        });
    }


    return (
        <>
            <div className='gameBoxTitle'>Minesweeper</div>
            <button onClick={()=>{ newGameGenerator(); showHide(); }}>new game</button>
            {visible && (<div className='gameBox'>
                <div className='tileZone'>
                    {tiles}
                </div>
            </div>)}
        </>
    )
}

export default Gamebox;