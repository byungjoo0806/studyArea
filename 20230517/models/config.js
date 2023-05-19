const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user : "root",
    password : "",
    database : "pairProject",
    multipleStatements : true
});

module.exports = mysql;