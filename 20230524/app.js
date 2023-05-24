// 웹 소켓
// 웹 소켓을 사용하는 이유
// 양방향 통신을 위해

// 지금까지 한 방식
// 단방향으로 요청,응답을 받는 구조
// 서버에서 데이터를 푸쉬하는 경우

// 웹 소켓의 장점
// 헤더의 값이 같이 넘어가는데
// 한번 연결할때 헤더값을 전송하기 때문에 오버헤드
// 많은 데이터가 전송이 되지 않는다.

// 실시간으로 채팅을 구현하거나 실시간으로 해야하는 작업이 있을 경우 사용

// 가상화폐 거래소 같은 경우
// 데이터 전송이 자주 일어나기 때문에 웹소켓을 사용해서 구현하는게 좋다.

// 효율적인 데이터 통신

// soket.io 라는 라이브러리를 사용해보자.

// 페이지에서 댓글을 달았다고 가정했을때
// 페이지를 새로고침해야 그 댓글이 보이는 현상
// 웹소켓으로 양방향 통신을 이용해서 실시간으로 글이 보이게 처리를 할 수 있다.

// 프로젝트 시작
// express soket.io ejs

const express = require("express");
const PORT = 5024;
const path = require("path");
const socketIo = require("socket.io");

const app = express();

app.set("views", path.join(__dirname,"page"));
app.set("view engine","ejs");

// 유저1이 접속을 하고, 유저2가 접속을 하고
// 유저끼리 실시간 채팅을 보내볼수 있게
app.get("/",(req,res)=>{
    res.render("main");
});

const server = app.listen(PORT,()=>{
    console.log("server open");
});

// 소켓 객체 생성
// 대기 시켜 놓은 서버 객체를 매개변수로 전달
const io = socketIo(server);
// 소켓이 연결이 되고

let userId = [];

// 소켓들에게 이벤트를 등록
// connection 이벤트 : 접속시 실행되는 이벤트
io.sockets.on("connection",(socket)=>{
    // 현재 접속한 클라이언트의 socket이 매개변수로 들어온다.
    // 유저1이 접속했다는 얘기
    console.log("user1 in server");
    // socket.id : 현재 접속한 유저가 누구인지 판별해준다.
    console.log(socket.id);
    // 배열에 유저 아이디 담아놓기
    userId.push(socket.id);
    console.log(userId);
    
    // 클라이언트 측에서 이벤트를 푸쉬하면 실행 시킬 이벤트
    socket.on("hi",(data)=>{
        // 자기 자신에게 이벤트 푸쉬
        console.log(data,"이벤트를 클라이언트에서 보냄");

        // 모든 대상에게 이벤트 푸쉬
        // io.sockets.emit("hi","모두에게 보냄");

        // 자기 제외 모든 대상에게 이벤트 푸쉬 (방송 느낌)
        // socket.broadcast.emit("hi",data.msg);

        // 비밀 대화 : 방을 파서 채팅할때 하자

        // 특정 대상에게 보낼 예정
        // to 메소드 : 이벤트를 푸쉬할 유저의 아이디값을 매개변수로 전달
        io.sockets.to(data.id).emit("hi",data.msg);
    });
    // 유저가 접속을 해제 했을때 (페이지를 나갔을떄)
    socket.on("disconnected",()=>{
        // 유저가 접속을 해제했을때 실행되는 이벤트
        console.log("user disconnected");
        userId = userId.filter((value)=>value!=socket.id);
        console.log(userId);
    });
});