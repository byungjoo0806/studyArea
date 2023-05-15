// 입장토큰만 만들어서 로그인 검증했는데

// Access token만 사용한 방식
// 1. 이용자가 로그인 시도를 하고
// 2. 서버에서 이용자를 확인하고 입장권(토큰)을 발급해주고 (JWT 토큰 인증정보를 payload에 할당하고 생성)
// 3. 생성한 토큰을 클라이언트에 반환해주고, 클라이언트는 이 입장권을 가지고 있는다.
// 4. 클라이언트가 서버에 요청을 할때, 이 입장권(토큰)도 같이 보내서 요청을 시도한다.
// 5. 서버는 요청을 받아서 그 입장권이 유효한지 확인하고, 유효한 입장권이면 요청을 처리하고 요청에대한 응답을 해준다.
// 6. 입장권(토큰)이 정상적인지 확인하고, 썩었거나 변조가 되어있으면 다시 로그인 시킨다. (입장권을 새로 산다는 느낌)

// Access token만 사용하면 인증 보안이 취약할 수 있어서 다른사람이 Access token을 탈취했을때
// 토큰의 유효기간이 끝날때까지는 막을수가 없다. 그래서 유효기간을 짧게 준다.
// 하지만 유효기간이 짧으면, 로그인을 계속해야하는 번거로움이 생기고, 사용자가 사용하기 힘들다.
// 그래서 Refresh token의 유효기간을 길게주고, Access token의 유효기간을 짧게 준다.

// 너무 어려운 개념은 아니고
// JWT토큰을 그냥 2개 사용하는것.
// Refresh token은 유효기간을 길게 주고, Access token의 유효기간이 끝났을때 발급해주는 역할만 하면 된다.

// Access token과 Refresh token을 같이 사용한 인증 방식
// 1. 클라이언트가 로그인
// 2. 서버에서 사용자를 확인하고, 입장권(토큰), 권한, 인증정보를 payload에 할당하고 생성
// Refresh token을 만들어서 데이터베이스에 저장해두고, 2개의 토큰 전부 클라이언트에 전달해준다.
// 3. 클라이언트도 두 토큰을 가지고있고
// 4. 클라이언트가 요청을 할때, Access token을 전달해서 요청한다.
// 5. 서버는 전달받은 토큰을 확인하고 Access token을 디코딩해서 사용자 정보를 확인하고
// 6. 만약 토큰이 정상적인지 확인(썩었거나 변조된 토큰인지 확인)
// 7. 변조된 토큰이면 새로 로그인 시킬수있게 한다.
// 8. 만약에 날짜가 지난 토큰이면 Refresh token으로 access token을 재발급 해준다.

// Access token은 우리가 사용하는 그대로이고, Refresh token만 추가되었는데,
// Access token의 발급 용도로만 알고있으면 된다.

// 오늘 사용할 모듈
// dotenv express cookie-parser jsonwebtoken ejs

const express = require("express");
const PORT = 5080;
const path = require("path");

const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const app = express();

app.set("views", path.join(__dirname, "page")); // view 경로 설정 (set)
app.set("view engine","ejs"); // view engine 설정 (set)
app.use(express.urlencoded({extended : false})); // body 객체 사용 (use)
app.use(cookie()); // 쿠키 사용 (use)

// 더미 객체 (이미 회원가입을 했다고 가정하고)
const user = {
    id : "muyo",
    password : "qwer1234"
}

app.get("/",(req,res)=>{
    res.render("login");
})

app.post("/login",(req,res)=>{
    // 요청 객체의 body에 user_id랑 user_pw
    const {user_id,user_pw} = req.body;
    if(user_id === user.id && user_pw === user.password){
        // access token 발급
        const accessToken = jwt.sign({
            id : user.id
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : "20s",
            issuer : "andy"
        });
        // refresh token
        const refreshToken = jwt.sign({
            id : user.id
        },process.env.REFRESH_TOKEN_KEY,{
            expiresIn : "1d",
            issuer : "andy"
        });
        // 쿠키 생성
        res.cookie("refresh",refreshToken,{maxAge : 24 * 60 * 60 * 1000});
        res.render("join",{accessToken});
    };
});

app.post("/refresh",(req,res)=>{
    // 옵션 체이닝 : 뒤에 오는 키가 있는지 먼저 확인하고, 키가 있으면 그 값을 호출해서 반환 - 크래쉬 방지
    // console.log(req.cookies);
    if(req.cookies?.refresh){
        const refreshToken = req.cookies.refresh;
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY,(err,decode)=>{
            // err가 잇으면 다시 로그인하자
            if(err){
                res.send("please log in again");
            }else{
                const accessToken = jwt.sign({
                    id : user.id
                },process.env.ACCESS_TOKEN_KEY,{
                    expiresIn : "20s",
                    issuer : "andy"
                });
                res.render("join",{accessToken});
            }
        })
    }else{
        res.send("please log in");
    }
})

app.listen(PORT, ()=>{
    console.log("server open");
});