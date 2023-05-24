const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Login = async (req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({where : {username}});
        if(user == null){
            res.send("please check your username");
        };
        const same = bcrypt.compareSync(password,user.password);
        if(same){
            if(user.loginAllow === true){
                let token = jwt.sign({
                    id : user.id,
                    name : user.name,
                    nickname : user.nickname,
                    username : user.username
                },process.env.ACCESS_TOKEN_KEY,{
                    expiresIn : "5m"
                });
                req.session.access_token = token;
                if(user.username === "admin"){
                    res.redirect("/admin");
                }else{
                    res.redirect("/mypage");
                }
            }else{
                res.send("please wait for account authorization");
            }    
        }else{
            res.send("please check your password");
        };
    } catch (error) {
        console.log(error);
        console.log("unable to login user in controller");
    }
};