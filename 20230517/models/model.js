const mysql = require("./config");

const userModel = {
    // create users table
    initTable : async ()=>{
        try {
            await mysql.query("SELECT * FROM users");
        } catch (error) {
            await mysql.query("CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), password VARCHAR(50))");
        }
    },

    // sign up
    userInsert : async (username,password)=>{
        try {
            const [user] = await mysql.query("SELECT * FROM users WHERE username = ?",[username]);
            console.log(user);
            if(user.length !== 0){
                let err = new Error("username already in use");
                return err;
            };
            await mysql.query("INSERT INTO users (username,password) VALUES (?,?)",[username,password]);
        } catch (error) {
            console.log("unable to add a new user");
        }
    },

    // login support
    userSelect : async (username)=>{
        try {
            const [user] = await mysql.query("SELECT * FROM users WHERE username = ?",[username]);
            // console.log(user[0]);
            // console.log(user);
            return user;
        } catch (error) {
            console.log("unable to find the user");
        }
    }
};

const boardModel = {
    initTable : async ()=>{
        try {
            await mysql.query("SELECT * FROM bulletin");
        } catch (error) {
            await mysql.query("CREATE TABLE bulletin (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50), content VARCHAR(500), username VARCHAR(50))");
        }
    },

    showTable : async ()=>{
        try {
            const [table] = await mysql.query("SELECT * FROM bulletin");
            return table;
        } catch (error) {
            console.log("unable to show the bulletin board");
        }
    },

    addItem : async (title,content)=>{
        try {
            await mysql.query("INSERT INTO bulletin (title,content) VALUES (?,?)",[title,content]);
        } catch (error) {
            console.log("unable to add an item to the board");
        }
    },

    showOne : async (id)=>{
        try {
            const [item] = await mysql.query("SELECT * FROM bulletin WHERE id = ?",[id]);
            return item[0];
        } catch (error) {
            console.log("unable to show detail of the item");
        }
    },

    editItem : async (id,title,content)=>{
        try {
            await mysql.query("UPDATE bulletin SET title = ?, content = ? WHERE id = ?",[title,content,id]);
        } catch (error) {
            console.log("unable to edit the selected item");
        }
    },

    deleteItem : async (id)=>{
        try {
            await mysql.query("DELETE FROM bulletin WHERE id = ?; SET @CNT=0; UPDATE bulletin SET bulletin.id=@CNT:=@CNT+1; ALTER TABLE bulletin AUTO_INCREMENT = 0",[id]);
        } catch (error) {
            console.log("unable to delete the item");
        }
    }
};

// boardModel.initTable();
// userModel.initTable();

module.exports = {userModel,boardModel};