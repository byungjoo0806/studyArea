// jsonwebtoken dotenv 설치
// npm i jsonwebtoken dotenv

const router = require("express").Router();
const express = require("express")
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/login",(req,res)=>{
    console.log("second page open");
    const name = "andy";
    const key = process.env.KEY;
    const sessionID = req.sessionID;
    console.log(sessionID);
    let token = jwt.sign({
        // 토큰 타입
        type : "JWT",
        // 토큰 이름
        name : name
    },key,{
        // 토큰의 유효시간
        expiresIn : "10s",
        // 토큰 발급자
        issuer : name
    })
    req.session.token = token;
    console.log(token);
    res.render("page2");
});

// 다른곳에서 로그인했으면 중복 로그인을 방지해주자
// 데이터베이스에 엑세스토큰을 저장하고
// 로그인을 하면 엑세스토큰을 갱신 시켜주는 작업

module.exports = router;