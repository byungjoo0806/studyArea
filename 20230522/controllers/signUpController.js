const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.Signup = async (req,res)=>{
    try {
        const {name,age,username,password} = req.body;
        const user = await User.findOne({where : {username}}); // 중복된 아이디인지 유저를 조회
        if(user != null){
            return res.send("username already in use");
        }
        // 중복된 아이디가 없으면 회원가입
        // hashSync : 동기적으로 실행할 수 있는 메소드
        const hash = bcrypt.hashSync(password,10);
        // users 테이블에 회원 추가
        User.create({
            name,
            age,
            username,
            password : hash,
        });
        res.redirect("/login");
    } catch (error) {
        console.log(error);
        console.log("unable to add a new user in controller");
    }
}