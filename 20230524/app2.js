const express = require("express");
const PORT = 5024;
const path = require("path");
const socketIo = require("socket.io");

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

const server = app.listen(PORT,()=>{
    console.log("server open");
});

const io = socketIo(server);

app.get("/",(req,res)=>{
    res.render("main2");
});

io.sockets.on("connection",(socket)=>{
    // 클라이언트가 접속을 했을때
    socket.on("message",(data)=>{
        // 모든 클라이언트에게 이벤트 푸쉬
        io.sockets.emit("message",data);
    });
});