const jwt = require("jsonwebtoken");

exports.isLogin = (req,res,next)=>{
    const {access_token} = req.session;
    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err,acc_decoded)=>{
        if(err){
            res.send("login session expired");
        }else{
            req.acc_decoded = acc_decoded;
            // console.log(req.acc_decoded);
            // console.log(req.acc_decoded.username);
            next();
        }
    })
};