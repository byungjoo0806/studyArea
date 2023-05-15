const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({
    user : "root",
    password : "DIGI0408as^^",
    multipleStatements : true,
    database : "20230515"
});

module.exports = mysql;