const {User} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Login = async (req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({where : {username}});
        if(user == null){
            return res.send("please check your username");
        };
        const same = bcrypt.compareSync(password,user.password);
        if(same){
            let token = jwt.sign({
                id : user.id,
                name : user.name,
                age : user.age
            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn : "5m"
            });
            req.session.access_token = token;
            res.redirect("/border");
        }else{
            res.send("please check your password");
        }
    } catch (error) {
        console.log(error);
        console.log("unable to login user in controller");
    }
}