// 프로젝트 시작

// 설치 모듈 - express mysql2 ejs

const express = require("express");
const path = require("path");
const PORT = 8000;

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));

const joinRouter = require("./routers/joinRouter");
app.use("/join",joinRouter); // add middleware (use)

const loginRouter = require("./routers/loginRouter");
app.use("/login",loginRouter); // add middleware (use)

app.listen(PORT,()=>{
    console.log("server open");
})