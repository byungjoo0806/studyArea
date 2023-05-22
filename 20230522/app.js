// 로그인하고 게시판에 글 작성, 수정, 삭제

// 프로젝트 시작

const express = require("express");
const PORT = 5022;
const path = require("path");
const dot = require("dotenv").config();
const session = require("express-session");
const {sequelize} = require("./models");

const app = express();

app.set("views",path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret : process.env.SESSION_KEY, // 세션키
    resave : false, // 다시 저장할지 여부
    saveUninitialized : false // 초기화할지 여부
}));

// force : 초기화 여부
sequelize.sync({force : false})
.then((e)=>{
    console.log("mysql database connected")
}).catch((err)=>{
    console.log(err);
    console.log("mysql database not connected");
});

// signup page
const signupRouter = require("./routers/signUp");
app.use("/signup",signupRouter);

// login page
const loginRouter = require("./routers/login");
app.use("/login",loginRouter);

// border page
const borderRouter = require("./routers/border");
app.use("/border",borderRouter);

app.listen(PORT,()=>{
    console.log("server open");
});