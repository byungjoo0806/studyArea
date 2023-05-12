// 프로젝트 시작!
// -------------------------------------
// package.json 만들기
// npm init -y

// express 설치
// npm i express
// -------------------------------------

// 로그인 할때 
// JWT 토큰을 사용한다
// JWT 존맛탱 토큰

// JWT : JSON Web Token
// 웹표준으로 두 객체의 JSON 객체를 사용해서 정보를 안정성 있게 전달해준다.

// JWT은 사용할 정보를 자체적으로 가지고 있다.(유저 정보같은 우리가 필요한 것들)
// JWT로 발급한 토큰은 기본정보(유저의 정보, 프로필)
// 그리고 토큰이 정상인지 검증(서명을 포함하고 있다. signature)

// 주로 로그인이 정상적인지 회원 인증 권한에서 사용한다.

// JWT은 유저가 로그인을 요청하면 서버에서 유저의 정보를 가지고 정상적인 루트로 로그인을 요청한 유저면 토큰을 발급해서 전달해준다.
// 유저가 서버에 요청을 할때, JWT 토큰을 포함해서 요청을 하면 서버가 요청을 받고,
// 토큰이 썩은 토큰인지 검사를 해서 착한 토큰이면 유저가 요청한 작업을 처리해주고 응답해준다.

// JWT를 쓰는 이유는 안정성있게 정보를 전달해서 요청을 할 수 있다.

// JWT를 생성하면 사용할 모듈이 인코딩과 해싱 작업을 해준다.

// HMAC : 해싱 기법을 적용해서 메시지의 위변조를 방지하는 기법
// SHA256 : 임의의 길이 메시지를 256 비트의 축약된 메시지로 만들어내는 해시 알고리

// JWT 토큰의 구조

// ----------------------------------------------------------------------
// header : 타입과 알고리즘의 정보를 가지고 있다.
// let header = {
//     // 사용하는 해싱 알고리즘
//     alg : "SHA256",
//     // 토큰의 타입
//     type : "JWT"
// }
// // payload : 유저의 정보와 만료 기간이 포함된 객체를 가지고 있다.
// let payload = {
//     // 토큰의 이름 (제목)
//     sub : "987654",
//     // 유저의 이름 (프로필)
//     name : "qwerasdf",
//     // 토큰이 발급된 시간 (발급된지 얼마나 지났는지)
//     lat : "123456789"
// }
// signature : header, payload를 인코딩하고 합쳐서 해싱을 하고 비밀키로 만든다.
// let signature = HMACSHA256(BASE64URL(header) + BASE64URL(payload));
// ----------------------------------------------------------------------

// header : 타입과 알고리즘의 정보를 가지고 있다.
// payload : 유저의 정보와 만료 기간이 포함된 객체를 가지고 있다.
// signature : header, payload를 인코딩하고 합쳐서 해싱을 하고 비밀키로 만든다.

// 사용할 모듈 express, jsonwebtoken, dotenv, ejs

// dotenv : 어플리케이션을 만들면서 설정값들을 여기에 작성해둔다.
// 이유 : 보안 - 민감한 정보를 .env 파일에 설정값들을 작성해둔다.
// 비밀키, 암호, API 토큰 등등을 저장해 놓는다.

// express module
const express = require("express");
// jwt module
const jwt = require("jsonwebtoken");
// dotenv module + config method
const dot = require("dotenv").config(); // .config : .env 파일을 읽어서 적용
const path = require("path");

// JWT 토큰을 만들건데
// 비밀키를 가지고 토큰을 만들어서 암호화를 시킬 예정
// 그럼 그 비밀키는 탈취가 되면 안되겠지?

// process.env : 우리가 .env 파일에 설정한 이름으로 키가 객체에 설정된다.
const KEY = process.env.KEY;

// 로그인을 하면 토큰이 만들어지는 페이지부터 만들자.

const PORT = 5005;
const app = express();

app.set("views",path.join(__dirname,"page")); // view 엔진의 파일 경로
app.set("view engine","ejs"); // 사용할 view 엔진 === ejs
app.use(express.urlencoded({extended : false})); // body 객체 사용하기 위함 (extended : false - 깊은 객체 사용 안함)

// get : 페이지 로딩할때 어떤 파일을 불러오면서 페이지를 띄울것인지
app.get("/",(req,res)=>{
    // render : 어떤 파일을 웹페이지에 띄울것인지 설정
    res.render("main");
})

app.post("/login",(req,res)=>{
    // 로그인을 정상적으로 했다 가정하고 토큰을 발급
    // 유저 정보는 변수로 만들어주자
    const name = "user1";
    const KEY = process.env.KEY;
    // sign 메소드 : JWT 토큰을 생성
    // 첫번째 매개변수 : header 객체, 두번째 매개변수 : signature, 세번째 매개변수 : payload
    let token = jwt.sign({
        // 타입을 JWT
        type : "JWT",
        // 유저 이름
        name : name
    },KEY,{
        // 토큰을 유지시킬 유효시간(만료시간)
        expiresIn : "5m", // 5m : 5분 유지시킬 토큰
        // 토큰 발급한 사람
        issuer : "user1"
    });
    console.log(token);
    res.send(token);
});

// app.post("/signup",(req,res)=>{
//     res.render("signup");
// })

// token result
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODU4NTc0LCJleHAiOjE2ODM4NTg4NzQsImlzcyI6InVzZXIxIn0.hTeLla-XpYlRLPEvSTE2Wqd8RLMrw8qngew818NP2ig"
// divided by .
// header : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// payload : eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODU4NTc0LCJleHAiOjE2ODM4NTg4NzQsImlzcyI6InVzZXIxIn0
// signature : hTeLla-XpYlRLPEvSTE2Wqd8RLMrw8qngew818NP2ig

app.listen(PORT,()=>{
    console.log("server open");
});