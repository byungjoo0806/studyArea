const mysql = require("./config");

exports.userInit = async (req,res)=>{
    try {
        await mysql.query("SELECT * FROM users");
    } catch (error) {
        const sql = "CREATE TABLE users (user_key INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20), password VARCHAR(128), refresh VARCHAR(255))";
        await mysql.query(sql);
    }
};

exports.userList = async ()=>{
    try {
        const [result] = await mysql.query("SELECT * FROM users")
        return result;
    } catch (error) {
        console.log(error);
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
        const [user] = await mysql.query("SELECT * FROM users WHERE username = ?",[username]);
        
        if(user.length != 0){
            // 이미 가입한 아이디임
            // 에러객체 생성 - new 동적할당으로
            let err = new Error("username already in use");
            console.log(err);
            return err;
        }

        // if 조건문 통과하면, 해당 아이디가 없다는 말이니까 회원가입 시켜주자
        const pw = await password;
        console.log(pw);
        await mysql.query("INSERT INTO users (username,password) VALUES (?,?)",[username,pw]);
    } catch (error) {
        console.log(error);
    }
};

exports.passwordUpdate = async (username,password)=>{
    try {
        await mysql.query("UPDATE users SET password = ? WHERE username = ?",[password,username]);
    } catch (error) {
        console.log(error);
    }
};

exports.userRefresh = async (username,refresh)=>{
    try {
        await mysql.query("UPDATE users SET refresh = ? WHERE username = ?",[refresh,username]);
    } catch (error) {
        console.log(error);
    }
};

exports.userDelete = async (username)=>{
    try {
        await mysql.query("DELETE FROM users WHERE username = ?; SET @CNT=0; UPDATE users SET user_key = @CNT:=@CNT+1; ALTER TABLE users AUTO_INCREMENT=0",[username]);
    } catch (error) {
        console.log(error);
    }
};