const {userList,userSelect,userInsert,passwordUpdate,userRefresh,userDelete} = require("../models");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

// load the whole user list
exports.users = async (req,res)=>{
    try {
        const data = await userList();
        return data;
    } catch (error) {
        console.log("unable to load the table from controller");
    };
};

// sign up
exports.Signup = async (req,res)=>{
    const {username,password} = req.body;
    try {
        await userInsert(username,password);
        res.redirect("/login");
    } catch (error) {
        console.log("unable to register a new user from controller");
    };
};

// log in
exports.Login = async (req,res)=>{
    const {username,password} = req.body;
    try {
        const data = await userSelect(username);
        // if such username exists
        if(!data ?.username){
            return res.send("username not found");
        };

        if(data.password !== password){
            return res.send("please check your password");
        };

        // log in successful at this point
        // access token created and given to user
        const accessToken = jwt.sign({
            username : data.username,
            mail : "user1@gmail.com",
            nickname : "user1"
        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn : "5s"
        });
        console.log(accessToken);

        // refresh token created and given
        const refreshToken = jwt.sign({
            username : data.username
        },process.env.REFRESH_TOKEN_KEY,{
            expiresIn : "20s"
        });
        console.log(refreshToken);

        await userRefresh(username, refreshToken);
        req.session.access_token = accessToken;
        req.session.refresh_token = refreshToken;
        res.send({access : accessToken, refresh : refreshToken});
    } catch (error) {
        console.log("unable to log in the user controller");
        console.log(error);
    };
};

// user token verify
exports.verifyLogin = async (req,res,next)=>{ // next 함수를 실행시켜주면 다음 미들웨어로 이동
    // res.send("you aint going anywhere");
    // 세션 값을 가져오고
    const {access_token,refresh_token} = req.session;
    jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded)=>{
        if(err){
            // 썩은 토큰이면
            jwt.verify(refresh_token, process.env.REFRESH_TOKEN_KEY, async (err, ref_decoded)=>{
                if(err){
                    console.log("refresh token expired in controller");
                    res.send("Login expired. Please log in again");
                }else{
                    const data = await userSelect(ref_decoded.username);
                    if(data.refresh == refresh_token){
                        const acccessToken = jwt.sign({
                            username : ref_decoded.username
                        },process.env.ACCESS_TOKEN_KEY,{
                            expiresIn : "5s"
                        });
                        req.session.access_token = acccessToken;
                        console.log("new access token created and given");
                        next();
                    }else{
                        res.send("you trying to break in?");
                    };
                };
            });
        }else{
            console.log("maintaining log in status");
            next();
        };
    });
};