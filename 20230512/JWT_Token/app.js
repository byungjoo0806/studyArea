// 프로젝트 시작

// package.json 만들고
// npm init -y

// express 대기상태
// npm i express

// page folder

// 경로 연결 view

// view engine === ejs

// body 객체 사용

const express = require("express");
const PORT = 5050;
const path = require("path");
const session = require("express-session");

const pageRouter = require("./routes/page");
const tokenRouter = require("./routes/token");
const verifyRouter = require("./routes/verify");

const app = express();

// 세션을 사용하기위해 설치할 모듈
// npm i express-session

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));

// 세션 설정
app.use(session({
    // 세션을 발급할때 사용할 키; 이것도 나중에는 소스코드에 노출 안되게 바꿔놓자
    secret : process.env.KEY2,
    // 세션이 변경되거나 저장할때나 불러올때 다시 저장 여부
    resave : false,
    // 세션에 저장할때 초기화 여부
    saveUninitialized : true
}));

app.use(pageRouter);
app.use(tokenRouter);
app.use("/userVerify",verifyRouter);

app.listen(PORT,()=>{
    console.log("server open");
});