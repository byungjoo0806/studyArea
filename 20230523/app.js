// 프로젝트 시작

// express express-session ejs dotenv jsonwebtoken mysql2 sequelize bcrypt

const express = require("express");
const path = require("path");
const PORT = 5023;
const session = require("express-session");
const dot = require("dotenv").config();
const {sequelize} = require("./models");

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));
// 
app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}));

//
sequelize.sync({force : false})
.then((e)=>{
    console.log("mysql database connected");
}).catch((err)=>{
    console.log(err);
    console.log("mysql database not connected");
})

// start page == login page
app.get("/",(req,res)=>{
    res.redirect("/login");
})

// login page
const loginRouter = require("./routers/login");
app.use("/login",loginRouter);

// signup page
const signupRouter = require("./routers/signup");
app.use("/signup",signupRouter);

// admin page
const adminRouter = require("./routers/admin");
app.use("/admin",adminRouter);

// main board page
const boardRouter = require("./routers/board");
app.use("/board",boardRouter);

// mypage
const mypageRouter = require("./routers/mypage");
app.use("/mypage",mypageRouter);

app.listen(PORT,()=>{
    console.log("server open");
});