import { useEffect, useState } from 'react';
import './App.css';
import Block from './components/Block';
import { imgRock, imgPaper, imgScis } from './img';
// 추억의 자바스크립트
// 가위바위보
// 플레이어 1, 컴퓨터 1 - 컴포넌트로 만들고
// 컴퓨터는 랜덤 가위 바위 보 중에 하나를 내고
// 플레이어는 선택할 수 있게
//
// 플레이어 컴퓨터 결과
// 가위    가위   무승부 
// 가위    바위   패
// 가위    보    승
// 바위    가위   승
// 바위    바위   무
// 바위    보    패
// 보     가위   패
// 보     바위   승
// 보     보     무
function App() {

  // 컴퓨터와 유저가 사용할 가위 바위 보의 객체를 하나 만들어주자
  // 선택 값을 담아 놓을 객체
  // const scissors = "scissors";
  // const paper = "paper";
  // const rock = "rock";

  // 선택값을 다루고 있어
  // select 객체 안에 데이터가 다 들어있으면
  // select 동작을 하는 프로그램을 작성할때
  // select 객체 안에 있는 값은 전부 select 동작을 하기 위해 만든 것이라고 알 수 있음

  // select 객체 : 컴퓨터와 유저가 가위바위보를 냈을때 필요한 데이터들을 모아둘 객체
  const select = {
    scissors : {
      name : "scissors",
      img : imgScis
    },
    rock : {
      name : "rock",
      img : imgRock
    },
    paper : {
      name : "paper",
      img : imgPaper
    }
  };

  // 유저가 선택한 값은 주시하자. 선택하면 데이터가 바뀌는데, 바뀐 상태로 다시 그려줘야 하기 때문에
  // 유저의 선택 useState
  const [userSelect, setUserSelect] = useState(null);
  // 컴퓨터의 선택 useState
  const [comSelect, setComSelect] = useState(null);
  // 승패 결과를 담을 useState
  const [result, setResult] = useState("");

  function userClick(selectedOption){
    // selectedOption == "scissors" -> select["scissors"]
    // selectedOption == "rock" -> select["rock"]
    // selectedOption == "paper" -> select["paper"]
    // 선택한 객체를 상태변수에 담아주자
    setUserSelect(select[selectedOption]);

    // 컴퓨터는 랜덤으로 선택을 시켜야하는데
    // 플레이어 선택 이후에 컴퓨터도 랜덤한 값을 가지고 가위 바위 보를 선택 시키자.
    let arr = Object.keys(select);
    // Object.keys - 객체의 키만 뽑아서 배열로 반환 해준다.
    console.log(arr);
    // 소수점 제외시키고 랜덤한 정수값 0~2
    let comRandom = Math.floor(Math.random() * 3);
    // comRandom - 0,1,2 중 랜덤 값
    // arr[comRandom] - "scissor","rock","paper" 중 하나
    // select[arr[comRandom]] - 3개의 객체 중 하나
    setComSelect(select[arr[comRandom]]);

    let player = select[selectedOption];
    let com = select[arr[comRandom]];
    if(player.name === com.name){
      setResult("draw");
    }else if(player.name === "scissors"){
      let result = com.name === "paper" ? "win" : "lose";
      setResult(result);
    }else if(player.name === "rock"){
      let result = com.name === "scissors" ? "win" : "lose";
      setResult(result);
    }else if(player.name === "paper"){
      let result = com.name === "rock" ? "win" : "lose";
      setResult(result);
    }
  }

  useEffect(()=>{
    console.log("you selected : ",userSelect);
  },[userSelect]);


  return (
    <>
      <div className="App">
        <Block data={userSelect} name={"player"} result={result}/>
        <Block data={comSelect} name={"com"} result={result}/>
      </div>
      <div>
        {/* 버튼은 여기에 */}
        <button onClick={()=>{userClick("scissors")}}>✌️</button>
        <button onClick={()=>{userClick("rock")}}>✊</button>
        <button onClick={()=>{userClick("paper")}}>✋</button>
      </div>
    </>
  );
}

export default App;
