const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user : "root",
    password : "",
    multipleStatements : true,
    database : "20230515"
});

module.exports = mysql;