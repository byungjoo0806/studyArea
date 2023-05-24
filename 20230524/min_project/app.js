// 비행기 좌석을 만드는데 1번 비행기, 2번 비행기, 3번 비행기로 나누어서
// 좌석을 예약 할수있게

// 사용할 모듈
// express socket.io ejs 

const express = require("express");
const PORT = 5024;
const path = require("path");
const socketIo = require("socket.io");

const app = express();

// 선택된 자리들을 보여줄 배열
let seats = [];

let temp = [
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1]
];

let temp2 = [
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1]
];

let temp3 = [
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,0,1,1]
];

let seatsArr = [temp,temp2,temp3];

// 선택한 비행기의 인덱스
let index = 0;

app.set("views",path.join(__dirname, "page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));

const server = app.listen(PORT,()=>{
    console.log("server open");
});

const io = socketIo(server);

app.get("/",(req,res)=>{
    res.render("main");
});

app.get("/seats/:id",(req,res)=>{
    index = req.params.id;
    seats = seatsArr[index];
    // 요청에 대한 응답으로 seatsArr 배열에서 id로 전달한 인덱스 호출한 배열을 응답해준다.
    res.send(seats);
});

io.sockets.on("connection",(socket)=>{
    socket.on("reserve",(data)=>{
        // 요청 이후 응답받은 값이 e
        // 시트 배열이 넘어온다.
        console.log("seats reserved");
        let seatTemp = seatsArr[data.selectCount];
        seatTemp[data.y][data.x] = 2;
        io.sockets.emit("reserve",data);
    });
});