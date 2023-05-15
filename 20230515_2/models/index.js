const {userInit,userList,userSelect,userInsert,passwordUpdate,userRefresh,userDelete} = require("./usersModel");

userInit();

// async function test(){
//     userDelete("aaa");
// };
// test();

module.exports = {userList,userSelect,userInsert,passwordUpdate,userRefresh,userDelete};