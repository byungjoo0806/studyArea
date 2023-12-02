import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Pokemon.json";

const App = ()=>{
  const {user,web3} = useWeb3();
  const [contract,setContract] = useState(null);

  // 모든 포켓몬을 담아놓은 상태변수
  const [allPokemon,setAllPokemon] = useState([]);

  // 토큰 보유량을 담아놓은 상태변수
  const [token,setToken] = useState("0");

  // 계정들을 담아놓을 배열 상태변수
  const [accounts,setAccounts] = useState([]);

  // 포켓몬을 가지고 있는 유저들
  const [pokemonUsers, setPokemonUsers] = useState([]);

  // 솔리디티 파일의 컨트랙트 가져오기
  useEffect(()=>{
    if(web3 !== null){
      if(contract) return;

      const pokemon = new web3.eth.Contract(
        abi,
        "0x7e318d5Cdad8d10aC313da49d7BEad0dc32ef2E7",
        {data : ""}
      );
      setContract(pokemon);
    }
  },[web3]);

  // ------------------------------------ 정보 가져올 함수들 ------------------------------------

  // 해당 지갑의 포켓몬 조회
  const getPokemon = async (account)=>{
    const result = contract.methods.getPokemon().call({from : account});
    return result;
  }

  // 토큰 보유량 조회
  const getTokens = async (account)=>{
    if(!contract) return;
    let result = web3.utils.toBigInt(await contract.methods.balanceOf(account).call()).toString(10);
    result = await web3.utils.fromWei(result,"ether");
    return result;
  }

  // 메타마스크 계정 조회
  const getAccounts = async ()=>{
    const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
    const _accounts = await Promise.all(
      accounts.map(async (account)=>{
        const token = await getTokens(account);
        // 추가로 어떤 포켓몬을 가지고있는지 추가할 부분
        const pokemon = await getPokemon(account);
        return {account,token,pokemon};
      })
    );

    showAllPokemon();
    getPokemonUsers();
    setAccounts(_accounts);
  };

  // 살 수 있는 모든 포켓몬 보여주기
  const showAllPokemon = async ()=>{
    const names = await contract.methods.allPokemonNames().call();
    const images = await contract.methods.allPokemonImages().call();
    
    const pairs = names.map((item,index)=>[item,images[index]]);
    setAllPokemon(pairs);
  };

  // 1. 포켓몬 랜덤으로 뽑을 수 있는 함수를 만들고 (버튼)
  const buyPokemon = async ()=>{
    await contract.methods.buyPokemon().send({from : user.account});
    getAccounts();
  };

  // 2. 포켓몬 한번이라도 뽑은 계정들만 모아놓고 어떤 포켓몬을 가지고있는지 보여주기
  const getPokemonUsers = async ()=>{
    const buyers = await contract.methods.getPokemonUser().call();
    setPokemonUsers(buyers);
  };

  // 3. 포켓몬 소유권 넘길수 있는 함수 만들기

  // ------------------------------------ 정보 가져올 함수들 ------------------------------------

  useEffect(()=>{
    if(!contract) return;
    getAccounts();
  },[contract]);

  if(user.account === null) return "please connect your wallet";
  return(
    <>
      <div style={{display : "flex"}}>
        <div style={{width : "50%", borderRight : "1px dashed"}}>
          <h3>Pokemon on sale</h3>
          {accounts.map((item,index)=>(
            <div key={index} style={{borderBottom : "1px solid"}}>
              account : {item.account} <br/>
              token : {item.token} PKC<br/>
              <div style={{ height : "100px", display : "flex" }}>
                {item.pokemon.map((item,index)=>(
                  <div key={index} style={{width : "100px", height : "80px", display : "flex", flexWrap : "wrap", justifyContent : "center", alignItems : "center"}}>
                    <img style={{width : "60px", height : "50px"}} src={item.url} alt={item.name} /> <br/>
                    <p style={{height : "20px", margin : "0", fontSize : "13px"}}>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div>
            <h3>Trainers</h3>
            {pokemonUsers.map((item,index)=>(
              <div key={index}>
                <p>user {index+1} : {item.account}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{width : "50%"}}>
          <h3>Available Pokemon</h3>
          <div><button onClick={buyPokemon}>buy new pokemon</button></div> <br/>
          <div style={{display : "flex"}}>
            {allPokemon.map((item,index)=>(
              <div key={index} style={{width : "100px", height : "80px", display : "flex", flexWrap : "wrap", justifyContent : "center", alignItems : "center"}}>
                <img style={{width : "60px", height : "50px"}} src={item[1]} alt={item[0]} /> <br/>
                <p style={{height : "20px", margin : "0", fontSize : "13px"}}>{item[0]}</p>
              </div>         
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default App;