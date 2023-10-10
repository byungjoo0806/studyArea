import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hooks";
import abi from "./abi/ERC20.json";

const App2 = ()=>{
    const {user,web3} = useWeb3();
    const [ERC20Contract,setERC20Contract] = useState(null);
    const [network,setNetwork] = useState(null);
    const [accounts,setAccounts] = useState([]);
    const [token,setToken] = useState("0");
    const [ethBalanace,setEthBalance] = useState(0);

    const [value,setValue] = useState("");
    const [value2,setValue2] = useState("");
    
    useEffect(()=>{
        if(web3 !== null){
            if(ERC20Contract) return;
            // 네트워크에서 컨트랙트 조회해서 인스턴스로 가져옴
            const ERC20 = new web3.eth.Contract(
                abi,
                "0xea4A60DB404a72C7d84C60C234d85c893039355A",
                {data : ""},
            );
            setERC20Contract(ERC20);
        };
    },[web3]);

    useEffect(()=>{
        // 이벤트 등록 - 네트워크가 변경되면 발생하는 이벤트 등록
        window.ethereum.on("chainChanged",(chainId)=>{
            console.log("network changed",chainId);
            // ganache : 0x539
            // sepolia : 0xaa36a7
            if(chainId === "0xaa36a7"){
              getAccounts();
            }
        });
    
        // 지갑이 변경되면 실행할 이벤트 등록
        window.ethereum.on("accountsChanged",(account)=>{
            console.log("wallet changed");
            getAccounts();
        });
    
        if(!network) return;
        getAccounts();
        // 컨트랙트 인스턴스가 있으면 실행시키지 말고
        // 네트워크가 정상적일때 실행시켜도 되겠다.
    },[network]);

    const switchNetwork = async ()=>{
        // 메타마스크에 해당 네트워크가 맞는지 요청
        // wallet_switchEthereumChain == chainId 가 맞는지 확인하는 메소드; 매개변수로 전달한 chainId 가 맞는지 확인
        // 0x539 1337 : 우리가 지정한 가나쉬 chainId
        // 디폴트 1337
        const net = await window.ethereum.request({
            jsonrpc : "2.0",
            method : "wallet_switchEthereumChain",
            params : [{chainId : "0xaa36a7"}]
        });
        // net 값이 null 이면, 해당 네트워크에 있다는 뜻.
        setNetwork(net || true);
    };
    
    // 전달받은 매개변수(지갑 주소)의 잔액을 보여주는 함수
    const getToken = async (account)=>{
        if(!ERC20Contract) return;
        let result = web3.utils.toBigInt(await ERC20Contract.methods.balanceOf(account).call()).toString(10);
        result = await web3.utils.fromWei(result,"ether");
        return result;
    };

    // 지갑의 이더리움 잔액 확인하는 함수
    const getEthBalance = async (account)=>{
        if(!ERC20Contract) return;
        let balance = await web3.eth.getBalance(account);
        balance = web3.utils.fromWei(balance,"ether");
        return balance;
    };
    
    // 메타마스크에 연결된 모든 지갑을 보여줄 함수
    const getAccounts = async ()=>{
        const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
        // 여기서 배열의 요소들을 하나씩 봐야하는데
        // map 에서 일어나는 promise 반환값을 다 처리하고 넘어가고싶어.
        // Promise.all 을 통해 요청이 다 끝나면 진행
        const accountsComponent = await Promise.all(
            accounts.map(async (account)=>{
                const token = await getToken(account);
                const eth = await getEthBalance(account);
                // const ethWei = await web3.eth.getBalance(account);
                // const eth = web3.utils.fromWei(ethWei,"ether");
                return {account,token,eth};
            })
        );
        // accountsComponent = [{account : "",token : 1000},{account : "",token : 2000},...]

        setToken(await getToken(accounts[0]));
        setEthBalance(await getEthBalance(accounts[0]));

        setAccounts(accountsComponent);
    };  
    
    // 하나의 지갑에서 다른 지갑으로 토큰 전송할 함수
    const transfer = async ()=>{
        await ERC20Contract.methods.transfer(value.replaceAll(" ",""), await web3.utils.toWei(value2,"ether")).send({
            from : user.account,
        });
        getAccounts();
    };
    
    
    // 페이지에 그려주기
    if(user.account === null) return "please connect your wallet";
    
    return(
        <>
            <button onClick={switchNetwork}>connect token contract</button>
            <div>wallet address : {user.account}</div>
            <h3>token : {token}</h3>
            <h3>eth : {ethBalanace}</h3>
            {accounts.map((item,index)=>(
                <div key={index}>
                    accounts : {item.account},
                    token : {item.token},
                    eth : {item.eth}
                </div>
            ))}
            <div>
                <label>to : </label> <br/>
                <input onChange={(e)=>{setValue(e.target.value)}} /> <br/>
                <label>amount : </label> <br/>
                <input onChange={(e)=>{setValue2(e.target.value)}} /> <br/>
                <button onClick={transfer}>send</button>
            </div>
        </>
    )
};

export default App2;