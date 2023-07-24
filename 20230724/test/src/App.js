import './App.css';
import {produce} from "immer";
import { add,add2,subtract,subtract2,tempThunk } from './features/countSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const num = useSelector(state => state.count.num);
  const num2 = useSelector(state => state.count2.num);
  const value = useSelector(state => state.count2.value);

  // // 초기 상태값
  // const state = {
  //   value : 0,
  //   arr : []
  // };

  // // 마치 {...state}를 쓰는것처럼 기존에 있던 상태값을 복사해서 가져온다.
  // // 기존에 있던 state의 값은 변하지 않는다. - 불변성을 지킨다.
  // // 
  // const nextState = produce(state, dra => {
  //   console.log(dra);
  //   dra.value += 1;
  //   dra.arr.push("a");
  // });

  // // 기존 객체
  // console.log("state : ", state);
  // // 새로운 객체
  // console.log("nextState : ", nextState);

  // 기존 객체를 유지하고 새로운 값을 생성해서 반환해줌

  // {...state, value : state.value + 1}
  // 카운트 기능 하나 만들기
  return (
    <div className="App">
      <div>
        number 1 : {num} <br/>
        <button onClick={()=>{dispatch(add())}}>+</button>
        <button onClick={()=>{dispatch(subtract())}}>-</button>
      </div>
      <div>
        loading status : {value} <br/>
        number 2 : {num2} <br/>
        <button onClick={()=>{dispatch(add2())}}>+</button>
        <button onClick={()=>{dispatch(subtract2())}}>-</button> <br/>
        <button onClick={()=>dispatch(tempThunk("seoul"))}>weather info</button>
      </div>
    </div>
  );
}

export default App;
