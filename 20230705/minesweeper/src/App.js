import { useEffect, useState } from 'react';
import './App.css';
import Gamebox from './components/Gamebox';
import { mineImg } from './img';

function App() {
  // 지뢰 아니면 안전
  const select = {
    safe : {
      name : "safe"
    },
    mine : {
      name : "mine",
      img : mineImg
    }
  }

  let arr = Array(9).fill(0);

  for(let i=0; i<3; i++){
    let randomIndex;
    do{
      randomIndex = Math.floor(Math.random()*9);
    }while (arr[randomIndex] === 1);

    arr[randomIndex] = 1;
  }
  console.log(arr);

  // random mine arrangement
  const [minePosition, setMinePosition] = useState(null);
  //
  const [result, setResult] = useState(null);

  function newGameGenerator(){
    setMinePosition(arr);
  };

  useEffect(()=>{
    console.log("current arrangement : ",minePosition);
  },[minePosition])

  return (
    <div className="App">
      <Gamebox newGameGenerator={newGameGenerator} position={minePosition}/>
    </div>
  );
}

export default App;
