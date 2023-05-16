const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user : "root",
    password : "",
    database : "20230516_2",
    multipleStatements : false
});

module.exports = mysql;