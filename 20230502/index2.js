// 여기서 사용할 모듈 : express path
// path 는 내장모듈
// path 모듈은 경로에 대한 조작을 도와주는 모듈
// 파일 시스템의 경로들을 상대경로나 절대경로 설정할 수 있도록 도와주는 모듈
// 상대경로나 절대경로를 쉽게 연결할 수 있도록 메소드를 지원해준다.

const express = require("express");
const path = require("path");

// 서버 인스턴스 생성
const app = express();

// get 메소드 : 요청해서 데이터를 가져오는 메소드
// get 방식으로 / url 로 요청을 하면 
app.get("/",(req,res)=>{ // 루트 경로의 처리
    // join 메소드가 전달받은 경로를 합쳐주는 동작을 해줌
    const body = path.join(__dirname, "views", "index.html");
    console.log(__dirname);
    console.log(body);
    // res.sendFile : html 파일을 브라우저로 보내줌; 브라우저에서 읽을 수 있도록
    res.sendFile(body);
})

// 리스트 페이지 라우팅 설정
app.get("/list",(req,res)=>{ // /list 경로 처리
    // path.join : 파일을 가져오는 메소드
    // 가져올 파일의 경로를 작성해주고
    const body = path.join(__dirname,"views","list.html");

    // res.sendFile : 브라우저로 파일을 보내준다
    res.sendFile(body);
})

// 마이 페이지 라우팅 설정
app.get("/mypage",(req,res)=>{ // /mypage 경로 처리
    const body = path.join(__dirname,"views","mypage.html");
    res.sendFile(body);
})

app.listen(4000,()=>{
    console.log("server open");
})