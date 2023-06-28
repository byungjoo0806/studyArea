// 이미지 업로드
// 서버측 컴퓨터에 이미지 파일을 폴더에 저장
// 파일의 경로를 설정하고 서버측에서 이미지 파일을 가져와서 보여준다.


// 프로젝트 시작
// express path multer cors
// multer 모듈을 사용해서 이미지 업로드할것
// 파일이 저장될 경로나 파일의 확장자 이름등을 설정해서 파일을 저장한다.

const express = require("express");
const path = require("path");
const PORT = 5030;
// cors : 도메인 허용하기 위해서
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended : false}));
app.use(cors({
    origin : "http://127.0.0.1:5500",
    // 요청에서 쿠키를 포함시킬지
    credentials : true
}));

// 요청과 응답에서 json 형식의 데이터를 전달받았을떄
// 요청과 응답에서 json 파싱을 해서 자바스크립트 객체로 변환시켜주는 미들웨어
// json 메소드로 json 파싱
app.use(express.json());

// file load
const uploadRouter = require("./routers/upload");
// 정적 파일 경로 추가했던것 처럼
app.use("/img",express.static(path.join(__dirname,"uploads")));
app.use("/upload",uploadRouter);

app.use(cors,({
    origin : "http://127.0.0.1:8080",
    credentials : true
}));

app.listen(PORT,()=>{
    console.log("server open");
});