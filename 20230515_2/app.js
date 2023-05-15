// 프로젝트 시작
// npm init -y
// 필요한 모듈 설치하기
// npm i express dotenv jsonwebtoken express-session mysql2 ejs

const express = require("express");
const PORT = 5030;
const path = require("path");

const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");
const session = require("express-session");
const mysql = require("mysql2/promise");

const app = express();


app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));
app.use(session({
    // 세션 발급에 사용할 비밀키 - 노출 안되게 env로 만들자
    secret : process.env.SESSION_KEY,
    // 세션을 저장하고 불러올때 세션을 다시 저장할지 여부
    resave : false,
    // 세션에 저장할때 초기화 여부
    saveUninitialized : false
}));

const joinRouter = require("./routers/joinRouter");
app.use("/join",joinRouter);

const loginRouter = require("./routers/loginRouter");
app.use("/login",loginRouter);

app.listen(PORT,()=>{
    console.log("server open");
})

// -------------------------------- mysql database --------------------------------
// create schema - CREATE SCHEMA `20230515` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
// const users = {
//     create : async ()=>{
//         try {
//             await mysql.query("SELECT * FROM 20230515")
//         } catch (error) {
//             await mysql.query("CREATE TABLE users (user_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), password VARCHAR(50))");
//         }
//     }
// }
// users.create();
// -------------------------------- mysql database --------------------------------

