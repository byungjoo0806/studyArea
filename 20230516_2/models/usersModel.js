const mysql = require("./config");

exports.usersInit = async ()=>{
    try {
        await mysql.query("SELECT * FROM users")
    } catch (error) {
        await mysql.query("CREATE TABLE users (user_key INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20), password VARCHAR(128))");
    }
};

exports.userSelect = async (username)=>{
    try {
        const [result] = await mysql.query("SELECT * FROM users WHERE username = ?",[username]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
};

exports.userInsert = async (username,password)=>{
    try {
        // 일단 중복되는 아이디인지 확인을 먼저 하자
        const [user] = await mysql.query("SELECT * FROM users WHERE username = ?",[username]);

        if(user.length != 0){
            // 이미 존재하는 아이디
            let err = new Error("username already in use");
            console.log(err);
            return err;
        }

        await mysql.query("INSERT INTO users (username,password) VALUES (?,?)",[username,password]);
    } catch (error) {
        console.log(error);
    }
};