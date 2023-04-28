// net 모듈을 가져오고
const net = require("net");

// 포트를 설정해줄 객체를 만들어놓고
const config = {port : 8080};

// connect 메소드 : TCP 소켓을 만들고 지정한 포트로 연결을 시도한다.
const socket = net.connect(config);

socket.on("connect",()=>{
    // 연결되면 connect 이벤트를 실행
    console.log("연결이 잘 되었어요");

    socket.write("데이터 전송");
})

socket.on("data",(data)=>{
    // TCP 소켓에서 데이터를 받으면 콜백 함수 실행
    console.log("받음 데이터 : ",data);

    // end 메소드 : TCP 연결을 종료
    socket.end();
})

// HTTP : 기본적으로 TCP 통신을 하고
// TCP 통신은 쌍방향 통신이 가능하다.
// HTTP 프로토콜은 규격을 브라우저 요청만으로
// 브라우저 -> http//127.0.0.1:8080
// 내 TCP Server가 받을 수 있게