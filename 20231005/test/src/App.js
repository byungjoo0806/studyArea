import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Counter.json";

const App = () => {
  const {user,web3} = useWeb3();
  const [count,setCount] = useState(0);
  const [countContract,setCountContract] = useState(null);

  useEffect(()=>{
    if(web3 !== null){
      if(countContract === null){
        // web3.eth.Contract : 네트워크에 배포되어있는 컨트랙트를 조회하고 인스턴스로 생성해둔다.
        // 메소드를 통해서 네트워크에 상호작용 할 수 있다.

        // web3.eth.Contract = (abi,CA, option)
        // {data : ""} : option 이 아예 비어있으면 터짐; 그래서 빈값으로라도 옵션 추가
        const Counter = new web3.eth.Contract(abi, "0xDf3A9D4CB1498BAfe3ae6399dAB33D07929c1e8A",{data : "", from : ""});
        // 이후에 디폴트 옵션을 추가하고 싶다면
        // 객체의 키값에 직접 추가해도 된다.
        Counter.options.from = "0x000";
        setCountContract(Counter);
      };
    };
  },[web3]);

  // 값 조회하는 함수
  const getValue = async () => {
    if(countContract === null) return;

    const result = web3.utils.toBigInt(await countContract.methods.getValue().call()).toString(10);
    setCount(result);
  };

  // 값 증가하는 함수
  const increment = async () => {
    await countContract.methods.increment().send({
      from : user.account,
      data : countContract.methods.increment().encodeABI(),
    });
    getValue();
  };

  // 값 감소하는 함수
  const decrement = async () => {
    await countContract.methods.decrement().send({
      from : user.account,
      data : countContract.methods.decrement().encodeABI(),
    });
    getValue();
  };

  useEffect(()=>{
    if(countContract !== null)
      getValue();
  },[countContract]);

  if(user.account === null)
    return "please login to metamask";

  return (
    <>
      <div>{user.account}</div>
      <div>카운터 : {count}</div>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </>
  )
}

export default App;