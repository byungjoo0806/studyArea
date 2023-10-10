import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = ()=>{
    const [user,setUser] = useState({
        account : "",
        balance : "",
    });

    const [web3,setWeb3] = useState(null);

    useEffect(()=>{
        if(window.ethereum){
            window.ethereum.request({method:"eth_requestAccounts"})
            .then(async ([data]) => {
                const web3Provider = new Web3(window.ethereum);
                setUser({
                    account : data,
                    balance : web3Provider.utils.toWei(await web3Provider.eth.getBalance(data),"ether"),
                });

                setWeb3(web3Provider);
                // 웹 메타마스크 지갑 목록 다 보여주고
                // 그 지갑에 있는 토큰 양 다 보여주고
                // 컨트랙트를 배포한 네트워크가 맞는지
                // 네트워크가 맞지 않으면 네트워크 변경할 수 있게끔 함수 실행
                // 지갑을 바꾸면 바꾼 지갑 내용으로 브라우저에 보일 수 있게
            })
        }else{
            alert("please install metamask extension");
        }
    },[]);

    return {
        user,
        web3
    };
};

export default useWeb3;