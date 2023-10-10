import { useState, useEffect } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Counter.json";

const App = () => {
  const {user,web3} = useWeb3();
  const [count,setCount] = useState(0);

  // CA (컨트랙트 주소)의 상태변수를 조회하는 함수를 작성
  const getCount = () => {
    // web3 가 있는지 확인
    if(web3 === null) return;

    // find : 배열을 돌면서 값을 찾는 메소드
    // 순회하는 요소는 객체 (data)
    // 순회하는 요소 객체에 name 키가 getValue 인지 확인하고 맞으면 return
    const getValueData = abi.find((data)=>data?.name === "getValue");
    // getValueData = {
    //   "inputs": [],
    //   "name": "getValue",
    //   "outputs": [
    //     {
    //       "internalType": "uint256",
    //       "name": "",
    //       "type": "uint256"
    //     }
    //   ],
    //   "stateMutability": "view",
    //   "type": "function",
    //   "constant": true
    // }
    
    const data = web3.eth.abi.encodeFunctionCall(getValueData, []);
    // data 실행시킬 내용이 담겨있음
    // 원격 프로시저 호출
    web3.eth.call({
      to : "0xBD437d89229f2FF9EBB25F4AC9030981d66C1384",
      data,
    }).then((data)=>{
      // toBN : 큰 자리수의 값을 다루기 때문에
      // toString(10) : 16진수에서 10진수로 변경
      // const result = parseInt(data,16);
      const result = web3.utils.toBigInt(data).toString(10);
      setCount(Number(result));
    });
  };

  // 값을 블록체인 네트워크에 요청해서 상태변수를 변경하는 함수
  const increment = async () => {
    const incrementData = abi.find((data) => data.name === "increment");

    const data = web3.eth.abi.encodeFunctionCall(incrementData, []);

    // 접속한 지갑의 주소
    // useWeb3 훅에서 지갑의 정보를 받아왔음
    const from = user.account;
    const _data = await web3.eth.sendTransaction({
      from : from,
      to : "0xBD437d89229f2FF9EBB25F4AC9030981d66C1384",
      data,
    });
    console.log(_data);
    getCount();
  };

  // 값을 감소시키는 함수
  const decrement = async () => {
    const decrementData = abi.find((data) => data.name === "decrement");

    const data = web3.eth.abi.encodeFunctionCall(decrementData, []);

    const from = user.account;
    const _data = await web3.eth.sendTransaction({
      from : from,
      to : "0xBD437d89229f2FF9EBB25F4AC9030981d66C1384",
      data,
    });
    console.log(_data);
    getCount();
  };

  useEffect(()=>{
    // 최초의 값 조회
    if(web3 !== null) getCount();
  },[web3]);

  if(user.account === "")
    return "login to Metamask";

  return (
    <>
      <div>
        <div>wallet address : {user.account}</div>
        <h2>카운트 : {count}</h2>
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>decrease</button>
      </div>
    </>
  )
};

export default App;