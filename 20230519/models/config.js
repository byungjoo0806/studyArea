const config = {
    dev : {
        username : process.env.USERNAME,
        password : process.env.PASSWORD,
        database : process.env.DATABASE,
        host : process.env.HOST,
        // dialect : 사용하는 데이터베이스의 출처
        dialect : "mysql"
    }
}

module.exports = config;