const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.Signup = async (req,res)=>{
    try {
        const {name,nickname,username,password} = req.body;
        const user = await User.findOne({where : {username}});
        if(user != null){
            res.send("username already in use");
        }
        const hash = bcrypt.hashSync(password,10);
        User.create({
            name,
            nickname,
            username,
            password : hash,
        });
        res.redirect("/login");
    } catch (error) {
        console.log(error);
        console.log("unable to register a new user in controller");     
    }
};