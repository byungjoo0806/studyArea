// 채팅방 만들기
// 방을 따로 나눠서 유저간에 귓속말

// 프로젝트 시작
// npm i express ejs socket.io

const express = require("express");
const path = require("path");
const PORT = 5025;
const socketio = require("socket.io");

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

const server = app.listen(PORT,()=>{
    console.log("server open");
});

app.get("/",(req,res)=>{
    res.render("main");
});

let userId = [];
const io = socketio(server);

io.on("connection",(socket)=>{
    // 유저가 접속시
    console.log("user connected");
    // 접속한 유저의 아이디를 배열에 추가
    let ids = socket.id;
    console.log(socket.id);
    userId.push(ids);
    let index = userId.indexOf(ids);
    // 현재 접속중인 유저 아이디
    console.log(index);
    console.log(userId);

    io.emit("whosConnected",userId,ids);

    // 유저 접속 해제시
    socket.on("disconnect",()=>{
        console.log("user disconnected");
        // 접속 해제한 유저를 제외한 배열
        userId = userId.filter((value)=>value != socket.id);
        // 현재 접속중인 유저 아이디
        console.log(userId);
    });

    socket.on("joinRoom",(room,name)=>{
        // 방에 유저가 접속하면
        // join 메소드 : 방에 입장 시킨다. (채팅방 개념)
        socket.join(room);
        // 현재 방에 있는 클라이언트에게 이벤트 푸쉬
        // 어느 방에 누가 접속했는지
        io.to(room).emit("joinRoom",room,name);
    });

    socket.on("leaveRoom",(room,name)=>{
        // 방에서 유저가 나가면
        // leave 메소드 : 방에서 나가게 해준다.
        socket.leave(room);
        // 어느방에서 누가 나갔는지, 해당방에 있는 유저들에게 이벤트 푸쉬
        io.to(room).emit("leaveRoom",room,name);
    });

    socket.on("chat",(room,name,msg)=>{
        io.to(room).emit("chat",name,msg);
    });

    socket.on("chatTo",(id,name,msg)=>{
        io.to(id).emit("chat",name, "whisper : " + msg);
    });
});