const jwt = require("jsonwebtoken");

exports.isLogin = (req,res,next)=>{
    const {access_token} = req.session;
    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err,acc_decoded)=>{
        if(err){
            res.send("login session expired");
        }else{
            // acc_decoded 키를 req에 추가해서 값을 전달
            req.acc_decoded = acc_decoded;
            // 유저의 토큰이 유효한 동안 로그인이 되어있는 상태이고
            // 유저의 필요한 정보도 payload 값에 있기 때문에 복호화해서 사용 가능하다.
            next(); // 다음 미들웨어 실행
        }
    })
}