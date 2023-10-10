import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Baseball.json";

const App = ()=>{
    const {user,web3} = useWeb3();
    // ticket 가격
    const [ticket,setTicket] = useState("0");
    // 플레이어가 입력하는 값 : 정답을 맞추기위해서 입력하는 답
    const [value, setValue] = useState("");
    // 게임을 한 사람들이 얼마나 이더를 쌓아놨는지 : 맞추면 보상
    const [reward,setReward] = useState("0");
    // 게임 진행도 : 몇판이나 진행되었는지
    const [progress,setProgress] = useState("0");
    // 플레이어가 맞춰야하는 3자리 숫자
    const [random,setRandom] = useState("000");
    // 현재 게임이 진행중인지 끝났는지
    const [message,setMessage] = useState();
    //
    const [baseballContract,setBaseballContract] = useState(null);
    
    useEffect(()=>{
        if(web3 !== null){
            if(baseballContract === null){
                const Baseball = new web3.eth.Contract(
                    abi,
                    "0x69328d6e937915958De0F505217249fD6505C22a",
                    //{data : ""}
                    {data : ""} // : 만약 from 이 있으면
                    // Counter.options.from = "0x000" - 이런게 같이 있어야함
                );
                setBaseballContract(Baseball);
            };
        };
    },[web3]);

    // 티켓 가격 보여주기
    const getTicket = async ()=>{
        if(baseballContract === null) return;

        const result = web3.utils.toBigInt(await baseballContract.methods.getTicketPrice().call()).toString(10);
        setTicket(await web3.utils.fromWei(result,"ether"));
    };

    // 보상 보여주기
    const getReward = async ()=>{
        if(baseballContract === null) return;

        const result = web3.utils.toBigInt(await baseballContract.methods.getReward().call()).toString(10);
        setReward(await web3.utils.fromWei(result,"ether"));
    };

    // 경기 상태 보여주기 : 진행중인지 끝났는지
    const getPlaying = async ()=>{
        const playing = web3.utils.toBigInt(await baseballContract.methods.getPlaying().call()).toString(10);
        // console.log(playing);
        setMessage(playing);
    };

    // 게임 진행도 보여주기
    const getProgress = async ()=>{
        const progress = web3.utils.toBigInt(await baseballContract.methods.getProgress().call()).toString(10);
        setProgress(progress);
    };

    // 정답 보여주기 : 관리자(배포자)만 실행
    const getRandom = async ()=>{
        const random = web3.utils.toBigInt(await baseballContract.methods.getRandom().call()).toString(10);
        setRandom(random);
    };

    // 보여주는 함수들 하나로 합치기
    const render = ()=>{
        getTicket();
        getReward();
        getPlaying();
        getProgress();
    };

    // 게임 재시작
    const restart = ()=>{
        setReward("0");
        setProgress("0");
        setMessage("0");
    };

    // 게임 시작
    const gameStart = async ()=>{
        if(value.length < 3){
            alert("please type 3 digits");
            return;
        };
        
         await baseballContract.methods.gameStart(Number(value)).send({
            from : user.account,
            value : await web3.utils.toWei("5","ether"),
        });
       // console.log(baseballContract.methods)
        
        render();
    };

    // 새로운 게임 시작
    const gameRestart = async () => {
        await baseballContract.methods.gameRestart().send({
            from : user.account,
        });

        render();
    };

    useEffect(()=>{
        if(baseballContract !== null){
            render();
        };
    },[baseballContract]);

    if(user.account == null) return "connect your wallet";
    return(
        <>
            <div>wallet address : {user.account}</div>
            <div>ticket price : {ticket} ETH</div>
            <div>current game progress : {progress} / 5</div>
            <div>total prize : {reward}</div>
            <div>status : {message == 0 ? "playing" : "game over" }</div>
            <br/>
            <input onChange={(e)=>{setValue(e.target.value)}} />
            <button onClick={gameStart}>start game</button>
            <br/>
            <div>number : {random}</div>
            <button onClick={getRandom}>for admin</button>
            <br/>
            <button onClick={gameRestart}>new game</button>
        </>
    )
};

export default App;