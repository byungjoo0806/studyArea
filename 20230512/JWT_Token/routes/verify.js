const router = require("express").Router();
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/",(req,res)=>{
    console.log("third page open");
    const token = req.session.token;
    // verify 메소드 : 토큰이 유효한지 검증
    // 첫번째 매개변수 : 토큰
    // 두번째 매개변수 : key
    // 세번째 매개변수 : 콜백함수
    // 콜백함수의 매개변수 : 첫번째 - err 내용 객체, 두번쨰 - 해석된 객체
    const key = process.env.KEY;
    jwt.verify(token,key,(err,decoded)=>{
        if(err){
            console.log("token expired");
            res.send("token expired or stolen");
        }else{
            // 해석된 객체
            console.log(decoded);
            console.log(token);
            res.send(decoded);
        };
    });
});

module.exports = router;